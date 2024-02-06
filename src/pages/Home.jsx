import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Style from '../styles/home.module.css'

function Home() {
  return (
    <div class={Style}>
      <Header/>
      <Banner/>
      <Slider/>
    </div>
  )
}

export default Home
