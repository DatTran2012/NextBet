import { FC } from "react"

export const TransactionNav: FC = () => {
    return (
        <div className="dashboard-heading">
            <div className="container">
                <div className="row justify-content-lg-end justify-content-between">
                    <div className="col-xl-3 col-lg-3">
                        <ul className="nav" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="deposit-tab" data-bs-toggle="tab"
                                    data-bs-target="#deposit" type="button" role="tab" aria-controls="deposit"
                                    aria-selected="true">deposit</button>
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