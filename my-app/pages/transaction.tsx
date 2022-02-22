/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from 'next'
import { BetPopModal } from '../components/shared/BetPopModal';
import { TransactionNav } from '../components/transaction/TransactionNav';
import { TransactionBody } from '../components/transaction/TransactionBody';

const Deposit: NextPage = () => {
    return (
        <div>
            <section className="dashboard-content pt-120">
                <div className="overlay">
                    <TransactionNav />
                    <TransactionBody />
                </div>
            </section>
            <BetPopModal />
        </div>
    )
}

export default Deposit
