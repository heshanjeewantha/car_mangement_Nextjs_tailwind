"use client";

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'



function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="hero min-h-screen pt-16 sm:pt-20 lg:pt-36">
      <div className="flex-1 padding-x">
        <h1 className="hero__title">
          Find, Book or Rent a Car - Quickly and Easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless online booking process.
        </p>
        
        <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center xl:justify-start">
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full px-8 py-3 sm:px-10 sm:py-4 hover:bg-blue-700 transition-colors"
            btnType="button"
          />
        </div>
      </div>
      
      <div className="hero__image-container"> 
        <div className="hero__image">
          <Image 
            src="/hero.png" 
            alt="hero" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero