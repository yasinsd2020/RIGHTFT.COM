import React from 'react'
import MainBanner from '../component/banner/mainBanner'
import FilterCards from '../component/filterCards/filterCards'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
import LeftSection from '../component/meet/leftSection'
const home = () => {

  return (
    <>
    {/* <Header/>
    <MainBanner />
    <FilterCards />
    <Footer /> */}
    <div className='w-[100%] bg-gradient-to-r pl-10 from-[#10113C] to-[#A52E59]'>
    <LeftSection />
    </div>
    </>
  )
}

export default home