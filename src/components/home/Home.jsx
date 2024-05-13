import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import HBlog from './HBlog'
import Hero from './hero/Hero'
import HPrice from './HPrice'
import Test from './testimonial/Test'


const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Test/>
      <HBlog/>
      <HPrice/>
    </>
  )
}

export default Home
