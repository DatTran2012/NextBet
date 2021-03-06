/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { ErrorHandler, getTxhash, subaddress } from "../../utils/Ultis";
import { FC, useContext, useEffect, useState } from "react"
import { useCookies } from 'react-cookie'
import WalletUlti from "../../utils/Wallet";
import { AppContext } from "../context/AppContext";
import { ShareSidebar } from "../shared/ShareSideBar";

const cookieName = ['playtogether', 'devaddress'];

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
    const { userSolanaAccount, setErrorHandler, userAddress } = useContext(AppContext);
    const [input, setInput] = useState<any>()
    const [txhash, setTxhash] = useState<string>();
    const [disable, setDisable] = useState<boolean>(false)

    function checkInput() {
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
        if (!userAddress) {
            throw new Error("You need to connect wallet first !");
        }
        if (err.length !== 0) {
            throw new Error(err.join('\n'))
        }
        if (Object.keys(value).length === 0) {
            throw new Error("You need to input at least one !");
        }
    }

    async function getTxhash() {
        try {
            setDisable(true);
            checkInput();
            fetch(process.env.NEXT_PUBLIC_API_GET_TXHASH, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'accept': '*/*',
                    "Access-Control-Allow-Origin": "*",
                    'apikey': process.env.NEXT_PUBLIC_NODE_API_KEY
                },
                body: JSON.stringify({
                    address: userSolanaAccount,
                })
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.json();
            }).then((data) => {
                setTxhash(data.signature);
                const sendto = {
                    AddressKey: userAddress[0],
                    RoomId: userSolanaAccount,
                    TxHash: data.signature,
                    Zero_Case: parseFloat(input.zero ? input.zero : 0),
                    One_Case: parseFloat(input.one ? input.one : 0),
                    Even_Case: parseFloat(input.even ? input.even : 0),
                    Odd_Case: parseFloat(input.odd ? input.odd : 0),
                    Type: 0,
                }
                // TODO post to hiep single bet

                setDisable(false);
            }).catch(error => {
                setDisable(false);
                setErrorHandler(ErrorHandler(error));
            });
        } catch (error) {
            setDisable(false);
            setErrorHandler(ErrorHandler(error));
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
                        {disable ?
                            <img width="30px" id="loadingplay" src="https://i.stack.imgur.com/kOnzy.gif" /> :
                            <button type="button" className="cmn-btn lastTeam" onClick={() => getTxhash()}
                                id="MyPlay">Play</button>
                        }
                    </div>
                </div>
            </div>

        </div >
    )
}

const BodyPlayTogether: FC = () => {
    const { userBalance, userAddress, setUserAddress, setUserBalance, playTogether, setPlayTogether, setErrorHandler } = useContext(AppContext);
    const [txhash, setTxhash] = useState<string>();
    const [input, setInput] = useState<any>();
    const [disable, setDisable] = useState<boolean>(false);
    const [disableplay, setDisablePlay] = useState<boolean>(false);
    const [cookies, setCookie, removeCookie] = useCookies(cookieName);

    useEffect(() => {
        if (cookies.playtogether) {
            setDisable(true);
            setPlayTogether(cookies.playtogether)
        }
    }, [cookies.playtogether, setPlayTogether])

    function checkInput() {
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
        if (!userAddress) {
            throw new Error("You need to connect wallet first !");
        }
        if (!playTogether) {
            throw new Error("You need to join room !");
        }
        if (err.length !== 0) {
            throw new Error(err.join('\n'))
        }
        if (Object.keys(value).length === 0) {
            throw new Error("You need to input at least one !");
        }
    }

    async function playHandler() {
        try {
            setDisablePlay(true);
            checkInput();
            const sendto = {
                AddressKey: userAddress[0],
                RoomId: playTogether,
                TxHash: '',
                Zero_Case: parseFloat(input.zero ? input.zero : 0),
                One_Case: parseFloat(input.one ? input.one : 0),
                Even_Case: parseFloat(input.even ? input.even : 0),
                Odd_Case: parseFloat(input.odd ? input.odd : 0),
                Type: 1,
            }
            // TODO post to hiep multi player bet

            setDisablePlay(false);
        } catch (error) {
            setDisablePlay(false);
            setErrorHandler(ErrorHandler(error));
        }
    }

    function adddays(days: number) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        return date;
    }

    async function joinGame() {
        try {
            const address = await WalletUlti().AutoConnect();
            setUserAddress(address);
            setCookie(cookieName[0], playTogether, { path: '/', expires: adddays(3) });
        } catch (error) {
            setErrorHandler(ErrorHandler(error));
        }
    }

    async function deleteAddress() {
        removeCookie(cookieName[0], { path: '/' });
        setPlayTogether('');
        setDisable(false);
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
                                onChange={e => setPlayTogether(e.target.value)} value={playTogether || ""} />
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
                        {disableplay ?
                            <img width="30px" id="loadingplay" src="https://i.stack.imgur.com/kOnzy.gif" /> :
                            <button type="button" className="cmn-btn lastTeam"
                                onClick={async () => await playHandler()} id="MyPlay">Play</button>
                        }
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