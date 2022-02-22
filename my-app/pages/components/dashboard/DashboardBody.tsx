/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { FC, useContext, useEffect, useState } from "react"
import { chainList } from "../../utils/ChainId";
import { ConnectMetamask, GetBalance, SendBaseEndpoint } from "../../utils/Wallet";
import { AppContext } from "../context/AppContext";

function ErrorHandler(error: any) {
    console.log(error)
}
function subaddress(address: string) {
    var sub = address.substring(0, 5);
    var sub2 = address.substring(address.length - 5, address.length);
    return sub + '....' + sub2;
}

const DashboardSidebar: FC = () => {
    const { userBalance, userAddress, setUserAddress, setUserBalance, setUserSolanaAccount } = useContext(AppContext);
    // call api get balance/devaddress/status
    async function connect() {
        try {
            const address = await ConnectMetamask()
            setUserAddress(address);
            const walletBalance = await GetBalance(chainList.BSCTestnet.URL, (address as Array<string>)[0]);
            setUserBalance(walletBalance);
            // fetch("https://api-game.solbook.io/solana/getaccountbystatus", {
            //     method: 'GET',
            //     headers: {
            //         'apikey': process.env.APIKEY,
            //         // 'Content-Type': 'application/json'
            //     }
            // })
            //     .then(response => {
            //         if (!response.ok) {
            //             throw new Error('Network response was not OK');
            //         }
            //         return response.json();
            //     })
            //     .then(data => {
            //         setUserSolanaAccount(data.publicKey)
            //     })
            //     .catch(error => {
            //         ErrorHandler(error);
            //     });
        } catch (error) {
            ErrorHandler(error);
        }
    }
    async function disconnect() {
        setUserAddress(null);
    }


    return (
        <div className="dashboard-sidebar">

            <div className="balance">
                <div className="single-item">
                    <img src="assets/images/icon/dashboard-sidebar-icon-1.png" alt="images" />
                    <h5>{userAddress ? userBalance : 0}</h5>
                    <p>{userAddress ? "Available Balance" : <button onClick={() => connect()} className="cmn-btn">Connect Wallet</button>}</p>
                </div>
                <div className="bottom-area d-flex align-items-center justify-content-between">
                    {userAddress && <p>{subaddress(userAddress[0])}</p>}
                </div>
            </div>
        </div>
    )
}

const DashboardTab: FC = () => {
    return (
        <div className="tab-pane fade show active" id="dashboard" role="tabpanel"
            aria-labelledby="dashboard-tab">
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="single-info">
                        <img src="assets/images/icon/user-info-icon-1.png" alt="icon" />
                        <div className="text-area">
                            <h4>678</h4>
                            <p className="mdr">Total Match</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="single-info">
                        <img src="assets/images/icon/user-info-icon-2.png" alt="icon" />
                        <div className="text-area">
                            <h4>91%</h4>
                            <p className="mdr">Win Ratio</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h5 className="title">Recent Game</h5>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">txhash</th>
                                <th scope="col">Odd</th>
                                <th scope="col">0</th>
                                <th scope="col">1</th>
                                <th scope="col">Even</th>
                                <th scope="col">Bet</th>
                                <th scope="col">Win</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">62C...HRfP</th>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>10</td>
                                <td>10</td>
                                <td>19.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const MyBetNav: FC = () => {
    return (
        <div className="d-flex">
            <ul className="nav" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="cmn-btn active" id="open-playing-tab"
                        data-bs-toggle="tab" data-bs-target="#open-playing" type="button"
                        role="tab" aria-controls="open-playing" aria-selected="true">My Game</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="cmn-btn" id="play-together-tab" data-bs-toggle="tab"
                        data-bs-target="#play-together" type="button" role="tab"
                        aria-controls="play-together" aria-selected="false">Play together</button>
                </li>
            </ul>
        </div>
    )
}

const BodyOpenPlaying: FC = () => {
    const { userSolanaAccount } = useContext(AppContext);
    const [input, setInput] = useState<any>()
    const [txhash, setTxhash] = useState<string>();

    function checkInput() {
        try {
            console.log(input);
            var value = {} as any;
            for (const property in input) {
                if (input[property]) {
                    const number = parseFloat(input[property]);
                    if (number <= 0) {
                        throw new Error(`${property} is not valid !`)
                    }
                    value[property] = number
                }
            }
            if (Object.keys(value).length === 0) {
                throw new Error("You need to input at least one !");
            }
            console.log(value);
        } catch (error) {
            ErrorHandler(error)
        }
    }
    return (
        <div className="tab-pane fade show active" id="open-playing" role="tabpanel"
            aria-labelledby="open-playing-tab">
            <div className="single-area">
                <div className="head-area d-flex align-items-center">
                    <p className="col-md-4 text-center"><span className="mdr cmn-btn">My Solana address (Devnet)</span></p>
                    <p ><a id="addresssol" href={`https://solscan.io/account/${userSolanaAccount}?cluster=testnet`} target="_blank">{userSolanaAccount}</a></p>
                </div>
                <div className="main-content">
                    <div className="row single-item">
                        <h6>Last Hash:</h6>
                        <p id="hashid"><a target="_blank" href={`https://solscan.io/tx/${txhash}`}>{txhash}</a></p>
                    </div>

                </div>
                <div className="main-content">

                    <div className="row single-item">
                        <h6>Last Result:</h6>
                        <p>You Win (300) / You Lose</p>
                    </div>
                </div>
                <div className="bottom-item">
                    <div className="input-single">
                        <label>(3-5-7-9)</label>
                        <div className="input-area">
                            <input className="odd" name="odd" type="number" onChange={e => setInput(({ ...input, [e.target.name]: e.target.value }))} placeholder="Input Amount" />
                        </div>
                    </div>
                    <div className="input-single">
                        <label>0</label>
                        <div className="input-area">
                            <input className="zero" name="zero" type="number" onChange={e => setInput(({ ...input, [e.target.name]: e.target.value }))} placeholder="Input Amount" />
                        </div>
                    </div>
                    <div className="input-single">
                        <label>1</label>
                        <div className="input-area">
                            <input className="onebet" name="onebet" type="number" onChange={e => setInput(({ ...input, [e.target.name]: e.target.value }))} placeholder="Input Amount" />
                        </div>
                    </div>
                    <div className="input-single">
                        <label>(2-4-6-8)</label>
                        <div className="input-area">
                            <input className="even" name="even" type="number" onChange={e => setInput(({ ...input, [e.target.name]: e.target.value }))} placeholder="Input Amount" />
                        </div>

                    </div>
                    <div className="bottom-item">

                        <button type="button" className="cmn-btn lastTeam" onClick={checkInput}
                            id="MyPlay">Play</button>
                        {/* onClick={myplayfunc()} */}
                        <img width="30px" id="loadingplay" style={{ display: 'none' }} src="https://i.stack.imgur.com/kOnzy.gif" />
                    </div>
                </div>
            </div>

        </div >
    )
}

const DashboardMyBet: FC = () => {
    const { userSolanaAccount } = useContext(AppContext);
    const [txhash, setTxhash] = useState<string>();
    const [togetherTxhash, setTogetherTxhash] = useState<string>();
    const [input, setInput] = useState<any>()
    const [togetherAddress, setPlayTogetherAddress] = useState<string>()

    async function getTxhash(address: string) {
        // Implement
        return 'true';
    }

    async function joinGame() {

    }



    useEffect(() => {
        getTxhash(userSolanaAccount).then((data) => setTxhash(data));
    }, [userSolanaAccount]);

    return (
        <div className="tab-pane fade" id="my-bets" role="tabpanel" aria-labelledby="my-bets-tab">
            <div className="bets-tab">
                <MyBetNav />
                <div className="bet-this-game">
                    <div className="tab-content">
                        <BodyOpenPlaying />
                        <div className="tab-pane fade show" id="play-together" role="tabpanel"
                            aria-labelledby="open-playing-tab">
                            <div className="single-area">
                                <div className="head-area">
                                    <div className="row d-flex align-items-center">
                                        <p className="col-md-4 text-center"><span className="mdr cmn-btn">My Solana address (Devnet)</span></p>
                                        <div className="input-area p-3 col-md-7">
                                            <input type="text" placeholder='Room Address' onChange={e => setPlayTogetherAddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="p-3 d-flex flex-row-reverse">
                                        <button className="cmn-btn col-md-3" type="button" onClick={() => getTxhash(togetherAddress)}>Join</button>
                                    </div>
                                </div>
                                <div className="main-content">
                                    <div className="row single-item">
                                        <h6>Last Hash:</h6>
                                        <p id="hashid"><a target="_blank" href={`https://solscan.io/tx/${txhash}`}>{txhash}</a></p>
                                    </div>

                                </div>
                                <div className="main-content">

                                    <div className="row single-item">
                                        <h6>Last Result:</h6>
                                        <p>You Win (300) / You Lose</p>
                                    </div>
                                </div>
                                <div className="bottom-item">
                                    <div className="input-single">
                                        <label>(3-5-7-9)</label>
                                        <div className="input-area">
                                            <input className="odd" id="odd" type="number" placeholder="Input Amount" />
                                        </div>
                                    </div>
                                    <div className="input-single">
                                        <label>0</label>
                                        <div className="input-area">
                                            <input className="zero" id="zero" type="number" placeholder="Input Amount" />
                                        </div>
                                    </div>
                                    <div className="input-single">
                                        <label>1</label>
                                        <div className="input-area">
                                            <input className="onebet" id="onebet" type="number" placeholder="Input Amount" />
                                        </div>
                                    </div>
                                    <div className="input-single">
                                        <label>(2-4-6-8)</label>
                                        <div className="input-area">
                                            <input className="even" id="even" type="number" placeholder="Input Amount" />
                                        </div>

                                    </div>
                                    <div className="bottom-item">

                                        <button type="button" className="cmn-btn lastTeam"
                                            id="MyPlay">Play</button>
                                        {/* onClick={myplayfunc()} */}
                                        <img width="30px" id="loadingplay" style={{ display: 'none' }} src="https://i.stack.imgur.com/kOnzy.gif" />
                                    </div>
                                </div>
                            </div>

                        </div >
                    </div >
                </div >
            </div >
        </div>
    )
}

const DashboardDeposit: FC = () => {
    const { userAddress, userBalance } = useContext(AppContext);
    const [deposit, setDeposit] = useState<string>();

    async function sendTransaction() {
        // const amount = 1 * 10 ** 9;
        // SendETH(chainList.BSCTestnet.URL, chainList.BSCTestnet.ChainID, '0x088412d6f2cf6e464e29bc0832e51f45bd90b007', amount.toString());
        if (isNaN(parseFloat(deposit as string))) {
            ErrorHandler("Wrong input")
            return;
        }

        SendBaseEndpoint(userAddress[0], process.env.REACT_APP_SYSADDRESS, deposit as string);
    }

    return (
        <div className="tab-pane fade" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
            <div className="deposit-with-tab">
                <div className="row">
                    <div className="col-xxl-4 col-xl-5">
                        <div className="balance-area">
                            <div
                                className="head-area d-flex align-items-center justify-content-between">
                                <p className="mdr">Your Balance</p>
                            </div>
                            <h6>{userBalance} <span>BNB</span></h6>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7">
                        <div className="right-area">
                            <h5>Deposit</h5>
                            <p className="para-area">You may switch to other currencies in the Left side
                                option.</p>
                            <div className="address-bar">
                                <p>Deposit Amount</p>
                                <div className="input-area">
                                    <input type="Number" placeholder='0' onChange={e => setDeposit(e.target.value)} />
                                    {/* <img src="assets/images/icon/copy-icon.png" alt="icon" /> */}
                                </div>
                                <button onClick={sendTransaction} type='button' className="cmn-btn" style={{ marginTop: 30 }}>Deposit</button>
                            </div>
                            <div className="bottom-area">
                                <div className="single-item">
                                    <h6>Important :</h6>
                                    <p>Send only BNB to this address, sending any other coin or
                                        token</p>
                                </div>
                                <div className="single-item">
                                    <h6>Notice :</h6>
                                    <p>Your deposit will be credited after 1 confirmation on the BNB
                                        blockchain network.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DashboardWithdraw: FC = () => {
    const { userBalance } = useContext(AppContext);
    const [withdraw, setWithdraw] = useState<string>();
    const [payAddress, setPayAddress] = useState<string>();
    async function handleWithdraw() {
        console.log(withdraw, payAddress);
    }
    return (
        <div className="tab-pane fade" id="withdraw" role="tabpanel" aria-labelledby="withdraw-tab">
            <div className="deposit-with-tab withdraw">
                <div className="row">
                    <div className="col-xxl-4 col-xl-5">
                        <div className="balance-area">
                            <div
                                className="head-area d-flex align-items-center justify-content-between">
                                {/* <p className="mdr">Current Balance</p>
                                                            <select>
                                                                <option value="1">BTC</option>
                                                                <option value="2">ETH</option>
                                                                <option value="3">LTC</option>
                                                            </select> */}
                                <p className="mdr">Your Balance</p>
                            </div>
                            <h6>{userBalance} <span>BNB</span></h6>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7">
                        <div className="right-area">
                            <h5>Withdraw</h5>
                            <div className="address-bar">
                                <form action="#">
                                    <div className="input-single">
                                        <label>Amount</label>
                                        <div className="input-area">
                                            <input type="number" placeholder="Enter Amount" onChange={e => setWithdraw(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="input-single">
                                        <label>Payment Address</label>
                                        <div className="input-area">
                                            <input type="text" placeholder="Enter Payment Address" onChange={e => setPayAddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <span className="btn-border">
                                        <a className="cmn-btn" onClick={handleWithdraw}>Get Start Now</a>
                                    </span>
                                </form>
                            </div>
                            <div className="bottom-area">
                                <div className="single-item">
                                    <h6>Transaction fee:</h6>
                                    <p>Your withdrawal will also have 0.0006 BNB subtracted to cover
                                        the transaction fee.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const DashboardBody: FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <DashboardSidebar />
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="tab-content">
                        <DashboardTab />
                        <DashboardMyBet />
                        <DashboardDeposit />
                        <DashboardWithdraw />
                    </div>
                </div>
            </div>
        </div>
    )
}