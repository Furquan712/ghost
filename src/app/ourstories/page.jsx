"use client"
import FAQ from '@/components/FAQ';
import MapSection from '@/components/MapSection';
import React, { useMemo } from 'react'

const OurStories = () => {
  // Sample data for stories

  // Sample data for gallery images
  const galleryItems = [
    "https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/5c950b89477110d5338b4a35_large.jpg",
    "https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/570721cd9267050a3a8b45a2_large.jpg",
    "https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/672e637826ac8f0f6d0dd48a_large.jpg",
    "https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/672e637826ac8f0f6d0dd48a_large.jpg",
  ];
  const galleryOffsets = useMemo(() => {
    return galleryItems.map(() => Math.floor(Math.random() * 21) - 10);
  }, [galleryItems]);

  return (
    <main className="p-10 ml-[5%] mr-[5%] sm:ml-[15%] sm:mr-[15%] bg-[url('/main-bg.png')] 
      bg-cover bg-center space-y-8 text-[#3B2712] font-serif">

      {/* Our Stories Section */}
      <section className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Frquently Asked Questions
                </h1>
                <p className="text-lg leading-relaxed">
                    Experience our historical ghost tour through the streets of Gatlinburg
                    (or your city). Dive into the past, hear tales of haunted legends,
                    and discover the spirits that roam among us today.
                </p>
            </section>

      <section className="my-8 " id='faq'>
        <FAQ />
      </section>
      <section className="my-8">
         <MapSection />
      </section>

      <section className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Gallery
                </h1>
            </section>

      {/* Gallery Section with Random Vertical Alignment */}
      <section className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              style={{ transform: `translateY(${galleryOffsets[index]}px)` }}
            >
              <img src={image} alt={`Gallery item ${index + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </section>
      
    </main>
  )
}

export default OurStories
