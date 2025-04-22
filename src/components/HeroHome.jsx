'use client'  // if this lives under `app/` in Next.js 15

import React from 'react'

const HeroHome = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Background video from public/ghost.mp4 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/ghost.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

       

      {/* Your content, on top of the video */}
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
          Take A Journey Into The Past
        </h1>
      </section>
    </div>
  )
}

export default HeroHome
