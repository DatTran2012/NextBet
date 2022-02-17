import { FC, useState } from "react"
import { chainList } from "../../utils/ChainId";
import { ConnectMetamask, GetBalance, SendBaseEndpoint } from "../../utils/Wallet";


export const DashboardNav: FC = () => {
    return (
        <div className="dashboard-heading">
            <div className="container">
                <div className="row justify-content-lg-end justify-content-between">
                    {/* <div className="col-xl-9 col-lg-12"></div> */}
                    <div className="col-xl-4 col-lg-12">
                        <ul className="nav" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="dashboard-tab" data-bs-toggle="tab"
                                    data-bs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
                                    aria-selected="true">dashboard</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="my-bets-tab" data-bs-toggle="tab"
                                    data-bs-target="#my-bets" type="button" role="tab" aria-controls="my-bets"
                                    aria-selected="false">my bets</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="deposit-tab" data-bs-toggle="tab"
                                    data-bs-target="#deposit" type="button" role="tab" aria-controls="deposit"
                                    aria-selected="false">deposit</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="withdraw-tab" data-bs-toggle="tab"
                                    data-bs-target="#withdraw" type="button" role="tab" aria-controls="withdraw"
                                    aria-selected="false">withdraw</button>
                            </li>
                        </ul>
                    </div>
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
        </div>
    )
}

const DashboardMyBet: FC = () => {
    return (
        <div className="tab-pane fade" id="my-bets" role="tabpanel" aria-labelledby="my-bets-tab">
            <div className="bets-tab">
                <div className="d-flex">
                    <ul className="nav" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="cmn-btn active" id="open-playing-tab"
                                data-bs-toggle="tab" data-bs-target="#open-playing" type="button"
                                role="tab" aria-controls="open-playing" aria-selected="true">Open
                                Playing</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="cmn-btn" id="canceled-tab" data-bs-toggle="tab"
                                data-bs-target="#canceled" type="button" role="tab"
                                aria-controls="canceled" aria-selected="false">Canceled</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="cmn-btn" id="finished-tab" data-bs-toggle="tab"
                                data-bs-target="#finished" type="button" role="tab"
                                aria-controls="finished" aria-selected="false">Finished</button>
                        </li>
                    </ul>
                </div>
                <div className="bet-this-game">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="open-playing" role="tabpanel"
                            aria-labelledby="open-playing-tab">
                            <div className="single-area">
                                <div className="head-area d-flex align-items-center">
                                    <span className="mdr cmn-btn">Pick Winner</span>
                                    <p>Mar 23, 2022,3:45PM EDT</p>
                                </div>
                                <div className="main-content">
                                    <div className="team-single">
                                        <h4>Arsenal</h4>
                                        <span className="mdr">Home</span>
                                        <div className="img-area">
                                            <img src="assets/images/team-logo-1.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="mid-area text-center">
                                        <div
                                            className="countdown d-flex align-items-center justify-content-center">
                                            <h4>
                                                <span className="hours">15</span><span
                                                    className="ref">h</span><span className="seperator">:</span>
                                            </h4>
                                            <h4>
                                                <span className="minutes">21</span><span
                                                    className="ref">m</span><span className="seperator">:</span>
                                            </h4>
                                            <h4>
                                                <span className="seconds">17</span><span
                                                    className="ref">s</span>
                                            </h4>
                                        </div>
                                        <h6>Division- Belarus</h6>
                                    </div>
                                    <div className="team-single">
                                        <h4>Volna</h4>
                                        <span className="mdr">Away</span>
                                        <div className="img-area">
                                            <img src="assets/images/team-logo-2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-item">
                                    <button type="button" className="cmn-btn firstTeam"
                                        data-bs-toggle="modal" data-bs-target="#betpop-up">Eagle will
                                        win</button>
                                    <button type="button" className="cmn-btn draw" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" className="cmn-btn lastTeam"
                                        data-bs-toggle="modal" data-bs-target="#betpop-up">Paeek will
                                        win</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="canceled" role="tabpanel"
                            aria-labelledby="canceled-tab">
                            <div className="single-area">
                                <div className="head-area d-flex align-items-center">
                                    <span className="mdr cmn-btn">Pick Winner</span>
                                    <p>Mar 23, 2022,3:45PM EDT</p>
                                </div>
                                <div className="main-content">
                                    <div className="team-single">
                                        <h4>Apollon</h4>
                                        <span className="mdr">Home</span>
                                        <div className="img-area">
                                            <img src="assets/images/team-logo-3.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="mid-area text-center">
                                        <div
                                            className="countdown d-flex align-items-center justify-content-center">
                                            <h4>
                                                <span className="hours">15</span><span
                                                    className="ref">h</span><span className="seperator">:</span>
                                            </h4>
                                            <h4>
                                                <span className="minutes">15</span><span
                                                    className="ref">m</span><span className="seperator">:</span>
                                            </h4>
                                            <h4>
                                                <span className="seconds">46</span><span
                                                    className="ref">s</span>
                                            </h4>
                                        </div>
                                        <h6>Division (Cyprus)</h6>
                                    </div>
                                    <div className="team-single">
                                        <h4>Paeek</h4>
                                        <span className="mdr">Away</span>
                                        <div className="img-area">
                                            <img src="assets/images/team-logo-4.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-item">
                                    <button type="button" className="cmn-btn" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" className="cmn-btn" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" className="cmn-btn" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="finished" role="tabpanel"
                            aria-labelledby="finished-tab">
                            <div className="single-area">
                                <div className="head-area d-flex align-items-center">
                                    <span className="mdr cmn-btn">Pick Winner</span>
                                    <p>Mar 23, 2022,3:45PM EDT</p>
                                </div>
                                <div className="main-content">
                                    <div className="team-single">
                                        <h4>Raufoss</h4>
                                        <span className="mdr">Home</span>
                                        <div className="img-area">
                                            <img src="assets/images/team-logo-5.png" alt="image" />
                                        </div>
                                    </div>
                                    <div className="mid-area text-center">
                                        <div
                                            className="countdown d-flex align-items-center justify-content-center">
                                            <h4>
                                                <span className="hours">15</span><span
                                                    className="ref">h</span><span className="seperator">:</span>
                                            </h4>
                                            <h4>
                                                <span className="minutes">15</span><span
                                                    className="ref">m</span><span className="seperator">:</span>
                                            </h4>
                                            <h4>
                                                <span className="seconds">17</span><span
                                                    className="ref">s</span>
                                            </h4>
                                        </div>
                                        <h6>Division (Norway)</h6>
                                    </div>
                                    <div className="team-single">
                                        <h4>Åsane</h4>
                                        <span className="mdr">Away</span>
                                        <div className="img-area">
                                            <img src="assets/images/team-logo-6.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-item">
                                    <button type="button" className="cmn-btn" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Eagle will win</button>
                                    <button type="button" className="cmn-btn" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Draw</button>
                                    <button type="button" className="cmn-btn" data-bs-toggle="modal"
                                        data-bs-target="#betpop-up">Paeek will win</button>
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
    const [walletaddress, setAddress] = useState<any>();
    const [balance, setBalance] = useState<string | undefined>('0')
    const [deposit, setDeposit] = useState<string>();
    const [withdraw, setWithdraw] = useState<string>();
    const [payAddress, setPayAddress] = useState<string>();

    const toAddress = "0x0224a83566B10A8cb59d861236a49381cBd9404E";

    async function connect() {
        const address = await ConnectMetamask()
        setAddress(address);
        const walletBalance = await GetBalance(chainList.BSCTestnet.URL, (address as Array<string>)[0]);
        setBalance(walletBalance);
    }

    async function disconnect() {
        setAddress(null);
    }

    async function sendTransaction() {
        // const amount = 1 * 10 ** 9;
        // SendETH(chainList.BSCTestnet.URL, chainList.BSCTestnet.ChainID, '0x088412d6f2cf6e464e29bc0832e51f45bd90b007', amount.toString());
        if (isNaN(parseFloat(deposit as string))) {
            ErrorHandler("Wrong input")
            return;
        }

        SendBaseEndpoint(walletaddress[0], toAddress, deposit as string);
    }

    async function handleWithdraw() {
        console.log(withdraw, payAddress);
    }

    function ErrorHandler(error: any) {
        console.log(error)
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="dashboard-sidebar">
                        <div className="single-item">
                            <img src="assets/images/profile-img-1.png" alt="images" />
                            <span className="btn-border">
                                <button onClick={walletaddress ? disconnect : connect} type='button' className="cmn-btn">{walletaddress ? 'Disconnect wallet' : 'Connect wallet'}</button>
                            </span>
                            <p style={{ wordWrap: 'break-word' }}>{walletaddress}</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="tab-content">
                        <DashboardTab />
                        <DashboardMyBet />
                        <div className="tab-pane fade" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
                            <div className="deposit-with-tab">
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-5">
                                        <div className="balance-area">
                                            <div
                                                className="head-area d-flex align-items-center justify-content-between">
                                                <p className="mdr">Your Balance</p>
                                            </div>
                                            <h6>{balance} <span>BNB</span></h6>
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
                                            <h6>{balance} <span>BNB</span></h6>
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
                    </div>
                </div>
            </div>
        </div>
    )
}