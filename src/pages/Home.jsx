import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Trainers from '../components/Trainers'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <div>
      <Navbar/>
<Hero/>
<About/>
<Trainers/>
<Pricing/>
    </div>
  )
}

export default Home
