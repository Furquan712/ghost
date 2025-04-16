// app/page.js
import Link from "next/link";

export default function Activities() {
    return (
      <main
        className="bg-[url('/main-bg.png')] 
                     bg-cover bg-center text-[#3B2712] font-serif
        "
      >
        {/* Page Title */}
        <h1 className="text-center text-[#800] text-3xl md:text-4xl font-bold mb-4">
          Ghost and Haunt Tours of Gatlinburg
        </h1>
        <p className="text-center mr-6 ml-6 mb-10">
        Experience a spine-chilling journey through Gatlinburg's storied past, where mysterious legends and ghostly whispers linger in every historic corner. Traverse shadow-drenched alleyways, haunted cabins, and eerie landmarks. Our tours ignite your imagination, blending fact with folklore for an unforgettable paranormal adventure that beckons believers and skeptics alike in every moment.
        </p>
  
        {/* Cards Container */}
        <div className="max-w-6xl mx-auto px-4">
          {/* First Row (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card 1 */}
            <div
              className="
                bg-yellow-100
                rounded 
                shadow-lg 
                p-6 
                flex flex-col 
                items-center 
                hover:shadow-2xl 
                transform 
                hover:scale-105 
                transition 
                duration-300 
                ease-in-out
              "
            >
              <img
                src="https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/672e5f8bf03012a76806fff1_large.jpg"
                alt="Titanic Dinner and Investigation"
                className="w-3/4 h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl text-[#800] font-semibold mb-2 text-center">
                TITANIC! Dinner and Investigation.
              </h2>
              <p className="text-center mb-4">
                Enjoy a unique dinner experience aboard the world-famous Titanic and join our special investigation.
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
  
            {/* Card 2 */}
            <div
              className="
                bg-yellow-100 
                rounded 
                shadow-lg 
                p-6 
                flex flex-col 
                items-center 
                hover:shadow-2xl 
                transform 
                hover:scale-105 
                transition 
                duration-300 
                ease-in-out
              "
            >
              <img
                src="https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/672e637826ac8f0f6d0dd48a_large.jpg"
                alt="Titanic Investigation Only"
                className="w-3/4 h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl text-[#800] font-semibold mb-2 text-center">
                TITANIC! Investigation only
              </h2>
              <p className="text-center mb-4">
                Take part in a guided investigation with real equipment—no dinner, all thrills.
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
  
          {/* Second Row (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 3 */}
            <div
              className="
                bg-yellow-100 
                rounded 
                shadow-lg 
                p-6 
                flex flex-col 
                items-center 
                hover:shadow-2xl 
                transform 
                hover:scale-105 
                transition 
                duration-300 
                ease-in-out
              "
            >
              <img
                src="https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/570721cd9267050a3a8b45a2_large.jpg"
                alt="Haunted Silhouette"
                className="w-3/4 h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl text-[#800] font-semibold mb-2 text-center">
                Thrilling Night Walk
              </h2>
              <p className="text-center mb-4">
                Experience the eerie streets by moonlight with ghostly stories at every turn.
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
  
            {/* Card 4 */}
            <div
              className="
                bg-yellow-100 
                rounded 
                shadow-lg 
                p-6 
                flex flex-col 
                items-center 
                hover:shadow-2xl 
                transform 
                hover:scale-105 
                transition 
                duration-300 
                ease-in-out
              "
            >
              <img
                src="https://www.dev.causalfunnels.com/wp-content/uploads/2025/04/5c950b89477110d5338b4a35_large.jpg"
                alt="Ghost and Haunt"
                className="w-3/4 h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl text-[#800] font-semibold mb-2 text-center">
                Ghost and Haunt Special
              </h2>
              <p className="text-center mb-4">
                Dive deep into Gatlinburg’s haunted history with our longest-running ghost tour.
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
      </main>
    );
  }
  