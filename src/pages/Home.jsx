import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Trainers from '../components/Trainers'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
<Hero/>
<About/>
<Trainers/>
<Pricing/>
<Testimonials/>
<Contact/>
<Footer/>
    </div>
  )
}

export default Home
