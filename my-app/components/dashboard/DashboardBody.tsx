/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { ErrorHandler, getTxhash, subaddress } from "../../utils/Ultis";
import { FC, useContext, useEffect, useState } from "react"
import { useCookies } from 'react-cookie'
import WalletUlti from "../../utils/Wallet";
import { AppContext } from "../context/AppContext";
import { ShareSidebar } from "../shared/ShareSideBar";

const cookieName = 'devaddress';

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
            var err = [];
            for (const property in input) {
                if (input[property]) {
                    const number = parseFloat(input[property]);
                    if (number <= 0) {
                        err.push(`${property} is not valid !`)
                    } else {
                        value[property] = number
                    }
                }
            }
            if (err.length !== 0) {
                throw new Error(err.join('\n'))
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

const BodyPlayTogether: FC = () => {
    const { userBalance, userAddress, setUserAddress, setUserBalance, playTogether, setPlayTogether, web3 } = useContext(AppContext);
    const [txhash, setTxhash] = useState<string>();
    const [input, setInput] = useState<any>()
    const [disable, setDisable] = useState<boolean>(false);
    const [cookies, setCookie, removeCookie] = useCookies([cookieName]);

    useEffect(() => {
        if (cookies.devaddress) {
            setDisable(true);
            setPlayTogether(cookies.devaddress)
        }
    }, [cookies.devaddress, setPlayTogether])

    function checkInput() {
        try {
            console.log(input);
            var value = {} as any;
            var err = [];
            for (const property in input) {
                if (input[property]) {
                    const number = parseFloat(input[property]);
                    if (number <= 0) {
                        err.push(`${property} is not valid !`)
                    } else {
                        value[property] = number
                    }
                }
            }
            if (err.length !== 0) {
                throw new Error(err.join('\n'))
            }
            if (Object.keys(value).length === 0) {
                throw new Error("You need to input at least one !");
            }
            console.log(value);
        } catch (error) {
            ErrorHandler(error)
        }
    }

    function adddays(days: number) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }

    async function joinGame() {
        try {
            const address = await WalletUlti().ConnectMetamask()
            setUserAddress(address);
            setCookie(cookieName, playTogether, { path: '/', expires: adddays(1) });
            const walletBalance = await WalletUlti().GetBalance(web3, (address as Array<string>)[0]);
            setUserBalance(walletBalance);
        } catch (error) {
            ErrorHandler(error);
        }
    }

    async function deleteAddress() {
        removeCookie(cookieName, { path: '/' });
        setDisable(false);
        console.log(playTogether);
    }

    return (
        <div className="tab-pane fade show" id="play-together" role="tabpanel"
            aria-labelledby="open-playing-tab">
            <div className="single-area">
                <div className="head-area">
                    <div className="row d-flex align-items-center">
                        <p className="col-md-4 text-center"><span className="mdr cmn-btn">My Solana address (Devnet)</span></p>
                        <div className="input-area p-3 col-md-7">
                            <input type="text" placeholder='Room Address' readOnly={disable}
                                onChange={e => setPlayTogether(e.target.value)} value={disable ? playTogether : ''} />
                        </div>
                    </div>
                    <div className="p-3 d-flex flex-row-reverse">
                        {disable ?
                            <button className="cmn-btn col-md-3" type="button" onClick={() => deleteAddress()}>Delete</button> :
                            <button className="cmn-btn col-md-3" type="button" onClick={() => joinGame()}>Join</button>
                        }
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
    const [input, setInput] = useState<any>()
    const [txhash, setTxhash] = useState<string>();

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
                        <BodyPlayTogether />
                    </div >
                </div >
            </div >
        </div>
    )
}

export const DashboardBody: FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <ShareSidebar />
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="tab-content">
                        <DashboardTab />
                        <DashboardMyBet />
                    </div>
                </div>
            </div>
        </div>
    )
}