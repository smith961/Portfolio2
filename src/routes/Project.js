import React from 'react'
import Navbar from '../Components/Navbar'
import Work from '../Components/Work';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';

const Project = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS" text="Some of my most recent works" />
        <Work />
        <Footer />
    </div>
  )
}

export default Project