/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from 'next'
import { HomeBanner, HomeAbout, HowItWork, BetThisGame, AmazingFeature, MoreFeature, FaqsSection, Affiliate } from '../components/home/HomeComponents'
import { BetPopModal } from '../components/shared/BetPopModal'

const Home: NextPage = () => {

  return (
    <div>
      <HomeBanner />

      <HomeAbout />

      <HowItWork />

      <BetThisGame />

      <BetPopModal />

      <AmazingFeature />

      <MoreFeature />

      <FaqsSection />

      <Affiliate />
    </div>
  )
}

export default Home
