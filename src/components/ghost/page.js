import React from 'react'
import Link from "next/link";


const Ghost = () => {
  return (
    <div>
                      <footer
                  className="
          bg-[url('/main-bg.png')]
          bg-cover bg-center 
          text-[#3B2712] font-serif
         

          p-10
        "
                >
                    
                  <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl text-[#800] font-bold mb-4 flex justify-center items-center">Featured Ghost Profiles</h1>
                    <p className="text-lg text-center leading-relaxed  ">
          Experience our historical ghost tour through the streets of Gatlinburg. Dive into the past, hear tales of haunted legends,
          and discover the spirits that roam among us today.
        </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column: "Schedule a Tour" */}
                      <div>
                        <h2 className="text-3xl text-[#800] font-bold mb-4">The Witch of Gatlinburg</h2>
                        <p className="mb-4 leading-relaxed">
                        The beautiful and sweet young lady that was driven to kill herself, find out why and how she could save you from the same end.                        </p>
                        

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

                      {/* Right Column: "Enjoyed Your Tour?" + Book Now */}
                      <div>
                        <h2 className="text-3xl text-[#800] font-bold mb-4">Lydia</h2>
                        <p className="mb-4 leading-relaxed">
                        She has been seen walking along the back wall of the cematery for almost 200 years,  find out her story and what makes her so different and intriguing.
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
                    </div>

                  </div>
                </footer>
    </div>
  )
}

export default Ghost
