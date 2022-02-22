import { FC } from "react"

export const BetPopModal: FC = () => {
    return (
        <div className="betpopmodal">
            <div className="modal fade" id="betpop-up" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-9 col-lg-11">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="top-item">
                                            <a className="cmn-btn firstTeam">Eagle will win</a>
                                            <a className="cmn-btn active draw">Draw</a>
                                            <a className="cmn-btn lastTeam">Paeek will win</a>
                                        </div>
                                        <div className="select-odds d-flex align-items-center">
                                            <h6>Select Odds</h6>
                                            <div className="d-flex in-dec-val">
                                                <input type="text" defaultValue="1.5" className="InDeVal2" />
                                                <div className="btn-area">
                                                    <button className="plus2">
                                                        <img src="assets/images/icon/up-arrow.png" alt="icon" />
                                                    </button>
                                                    <button className="minus2">
                                                        <img src="assets/images/icon/down-arrow.png" alt="icon" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mid-area">
                                            <div className="single-area">
                                                <div className="item-title d-flex align-items-center justify-content-between">
                                                    <span>Bet Value :</span>
                                                    <select>
                                                        <option value="eth">ETH</option>
                                                        <option value="eth">ETH</option>
                                                        <option value="eth">ETH</option>
                                                    </select>
                                                </div>
                                                <div className="d-flex in-dec-val">
                                                    <input type="text" defaultValue="0.1" className="InDeVal1" />
                                                    <div className="btn-area">
                                                        <button className="plus">
                                                            <img src="assets/images/icon/up-arrow.png" alt="icon" />
                                                        </button>
                                                        <button className="minus">
                                                            <img src="assets/images/icon/down-arrow.png" alt="icon" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-area quick-amounts">
                                                <div className="item-title d-flex align-items-center">
                                                    <p>Quick Amounts</p>
                                                </div>
                                                <div className="input-item">
                                                    <button className="quickIn">0.005</button>
                                                    <button className="quickIn">0.025</button>
                                                    <button className="quickIn">0.1</button>
                                                    <button className="quickIn">0.5</button>
                                                    <button className="quickIn">2.5</button>
                                                </div>
                                            </div>
                                            <div className="single-area smart-value">
                                                <div className="item-title d-flex align-items-center">
                                                    <p className="mdr">Smart Contact Value</p>
                                                </div>
                                                <div className="contact-val d-flex align-items-center">
                                                    <h4>0.1103</h4>
                                                    <h5>ETH</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-area">
                                            <div className="fee-area">
                                                <p>Winner will get: <span className="amount">0.179</span> ETH</p>
                                                <p className="fee">Escrow Fee: <span>5%</span></p>
                                            </div>
                                            <div className="btn-area">
                                                <button>Make (0.1 ETH) Bet</button>
                                            </div>
                                            <div className="bottom-right">
                                                <p>Game Closes:</p>
                                                <p className="date-area">Mar <span>21,2021-1:00</span> Am</p>
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