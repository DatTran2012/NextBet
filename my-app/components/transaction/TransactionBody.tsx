/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { ErrorHandler, getTxhash, subaddress } from "../../utils/Ultis";
import { FC, useContext, useState } from "react"
import { ConnectMetamask, GetBalance, SendBaseEndpoint } from "../../utils/Wallet";
import { AppContext } from "../context/AppContext";
import { ShareSidebar } from "../shared/ShareSideBar";

const TransactionDeposit: FC = () => {
    const { userAddress, userBalance } = useContext(AppContext);
    const [deposit, setDeposit] = useState<string>();

    async function sendTransaction() {
        // const amount = 1 * 10 ** 9;
        // SendETH(chainList.BSCTestnet.URL, chainList.BSCTestnet.ChainID, '0x088412d6f2cf6e464e29bc0832e51f45bd90b007', amount.toString());
        if (isNaN(parseFloat(deposit as string))) {
            ErrorHandler("Wrong input")
            return;
        }

        SendBaseEndpoint(userAddress[0], process.env.NEXT_PUBLIC_SYSADDRESS, deposit as string);
    }

    return (
        <div className="tab-pane fade show active" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
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

const TransactionWithdraw: FC = () => {
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

export const TransactionBody: FC = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <ShareSidebar />
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="tab-content">
                        <TransactionDeposit />
                        <TransactionWithdraw />
                    </div>
                </div>
            </div>
        </div>
    )
}