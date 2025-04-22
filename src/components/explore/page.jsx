"use client"
import FAQ from '@/components/FAQ';
import MapSection from '@/components/MapSection';
import React, { useMemo } from 'react'
import Link from "next/link";


const Explore = () => {
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
    <main className="bg-[url('/main-bg.png')] 
      bg-cover bg-center text-[#3B2712] font-serif">
        <section>
        <div className=" flex flex-col items-center justify-center gap-2 p-4">
                            <h2 className="mt-6 text-[#800] text-3xl font-bold mb-2">Want To Make A Reservation?</h2>
                            <p className="leading-relaxed text-center mb-4 ">
                                Click below and make your reservation for your visit to Ghost and Haunt Tours of Gatlinburg, The Ghost Hunting Experience or the Private Tour
                            </p>
                            <p className="leading-relaxed font-bold text-center">
                                Everyday at 9:00 pm check in at 8:30 pm | Adults: $25 plus tax | Children 12 and under $15 plus tax
                            </p>
                            <br />
                            <p className="leading-relaxed mb-4">
                                November and December start times are 7:00 pm with 6:30 check in, Closed January and February.
                            </p>
                            <p className="leading-relaxed mb-4">


                                $2.00 OFF FOR BOOKING ONLINE Use the code “ghost2off” to get $2.00 off any adult ticket!
                            </p>
                            <Link
                                type="button"
                                href="https://checkout.xola.app/index.html#buttons/5ad4ba23cf8b9cec3a8b4607?cache=1617135314631&openExternal=true&xwm=eyJvcmlnaW4iOiJodHRwczovL2dob3N0YW5kaGF1bnQuY29tIiwiY2hhbm5lbCI6ImdteWxlZ3J6aWFNcFhlT0QifQ~~"
                                className="
                  inline-block bg-[#800] hover:bg-red-800 text-white
                  py-2 px-5 rounded shadow-md transition-colors mb-4
                "
                            >
                                BOOK NOW
                            </Link>

                        </div>
        </section>
        <section className="text-center p-4">
            <h1 className="text-4xl text-[#800] md:text-5xl font-bold">
                Special Events
            </h1>
            <h2 className="text-lg text-[#800] md:text-2xl font-bold mb-4">
            TITANIC!
            </h2>
            <p className="text-lg leading-relaxed">
            We are proud to announce that we have been given a special and rare opportunity to do a midnight investigation in the Titanic Museum in Pigeon Forge Tn!
            On the night of Friday, July 11th 2025 
            </p>
        </section>

      {/* Our Stories Section */}
      <section className="text-center p-4">
                <h1 className="text-4xl text-[#800] md:text-5xl font-bold mb-4">
                    Frquently Asked Questions
                </h1>
                <p className="text-lg leading-relaxed">
                    Experience our historical ghost tour through the streets of Gatlinburg
                    (or your city). Dive into the past, hear tales of haunted legends,
                    and discover the spirits that roam among us today.
                </p>
            </section>

      <section className="mx-8 " id='faq'>
        <FAQ />
      </section>
      <section className="mx-8">
         <MapSection />
      </section>

      <section className="text-center mb-10">
                <h1 className="text-4xl text-[#800] md:text-5xl font-bold mb-4">
                    Gallery
                </h1>
            </section>

      {/* Gallery Section with Random Vertical Alignment */}
      <section className="mx-8">
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

export default Explore
