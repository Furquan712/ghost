import React from 'react'

const HeroHome = () => {
  return (
<div className="relative w-full h-[60vh] overflow-hidden">
  {/* Background YouTube iframe */}
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://www.youtube.com/embed/iY-skp4XrMM"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  />

  {/* Optional overlay for better text contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Your content, pushed above the video */}
  <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-4xl text-[#800] md:text-5xl font-bold mb-4">
      Take A Journey Into The Past
    </h1>
    <p className="text-lg leading-relaxed max-w-2xl">
      Experience our historical ghost tour through the streets of Gatlinburg
      (or your city). Dive into the past, hear tales of haunted legends,
      and discover the spirits that roam among us today.
    </p>
  </section>
</div>
  )
}

export default HeroHome
