import { FC } from "react"

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