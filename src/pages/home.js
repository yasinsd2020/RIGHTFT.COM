import React from 'react'
import MainBanner from '../component/banner/mainBanner'
import FilterCards from '../component/filterCards/filterCards'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
const home = () => {

  return (
    <>
    <Header/>
    <MainBanner />
    <FilterCards />
    <Footer />
    </>
  )
}

export default home