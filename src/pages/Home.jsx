import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Style from '../styles/home.module.css'
import Navbar from '../components/Nav/Navbar'

function Home() {
  return (
    <div class={Style}>
      <Navbar/>
      <Banner/>
      <Slider/>
    </div>
  )
}

export default Home
