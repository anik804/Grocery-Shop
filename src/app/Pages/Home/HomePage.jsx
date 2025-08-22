import React from 'react'
import Banner from './Components/Banner'
import Ratings from './Components/Ratings'
import AboutUs from './Components/AboutUs'
import WhyChooseUs from '@/app/whyus/page'
import FeaturedProducts from './Components/featuredProducts'

function componentName() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <WhyChooseUs></WhyChooseUs>
      <Ratings></Ratings>
      <AboutUs></AboutUs>
    </div>
  )
}

export default componentName
