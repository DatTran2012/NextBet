/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from 'next'
import { BetPopModal } from '../components/shared/BetPopModal';
import { DashboardNav } from '../components/dashboard/DashboardNav';
import { DashboardBody } from '../components/dashboard/DashboardBody';

const Dashboard: NextPage = () => {
    return (
        <div>
            <section className="dashboard-content pt-120">
                <div className="overlay">
                    <DashboardNav />
                    <DashboardBody />
                </div>
            </section>
            <BetPopModal />
        </div>
    )
}

export default Dashboard
