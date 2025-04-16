import Link from "next/link";

// app/Footer.js (or wherever you store your components)
export default function Footer() {
    return (
        <>
              <footer
        className="
          bg-[url('/main-bg.png')]
          bg-cover bg-center 
          text-[#3B2712] font-serif
          ml-[15%] mr-[15%]

          p-10
        "
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Two-column layout on larger screens */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: "Schedule a Tour" */}
            <div>
            <img
                  src="/footer-hand.png"
                  alt="Raven Illustration"
                  className="w-full h-auto"
                />
              <p className="mb-4 leading-relaxed">
                What secrets lie beyond the pretty shops and the main streets in Gatlinburg? 
                Step into the past with the Ghost and Haunt Tour of Gatlinburg!
              </p>
              <p className="mb-4 leading-relaxed">
                Join us in the parking lot next to the Log Cabin Pancake House at
                327 Historic Nature Trail (light #7) 7 days a week. 
                Reservations are required.
              </p>
              <p className="mb-4 leading-relaxed">
                March 1<sup>st</sup> – October 31<sup>st</sup>: Check in at 8:30 PM; tour leaves at 9:00 PM.
                <br />
                November 1<sup>st</sup> – December 31<sup>st</sup>: Check in at 7:15 PM; tour leaves by 7:30 PM.
                <br />
                January and February: Closed.
              </p>
              <a
                href="https://www.tripadvisor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-800 hover:text-blue-900"
              >
                TripAdvisor
              </a>
            </div>
  
            {/* Right Column: "Enjoyed Your Tour?" + Book Now */}
            <div>
              <h2 className="text-3xl text-[#800] font-bold mb-4">Enjoyed your tour? Leave us a review!</h2>
              <p className="mb-4 leading-relaxed">
              If you enjoyed your experience on the tour, please leave us a review on Trip Advisor! We try very hard to give all our customers as enjoyable an experience as possible and we would love it if you share that. Have suggestions on making the tour even better? Email us directly at {" "}
                <a
                  href="mailto:ghostwalksanta@gmail.com"
                  className="underline hover:text-red-800 transition-colors"
                >
                  ghostwalksanta@gmail.com
                </a>.
              </p>
              <h2 className="text-2xl text-[#800] font-bold mb-4">BOOK ONLINE - IF YOU DARE!</h2>
  
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
      <footer
        className="
          bg-[url('/bird-paper2.png')]
          bg-cover bg-center 
          text-[#3B2712] font-serif
          ml-[15%] mb-[15%] mr-[15%]  pb-10
        "
      >
        <div className="max-w-5xl">
  
          {/* Bottom Center FAQ Button */}
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
    {/* Raven Image */}
    <div className="flex mt-6">
      <img
        src="/header-heading.png"
        alt="Raven"
        className="w-100 h-auto"
      />
    </div>
    {/* Navigation */}
    <nav>
      <ul className="flex items-center gap-4 text-lg font-semibold">
        <li>
          <a href="" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Our Stories
          </a>
        </li>
        <li>
          <a href="/activities" className="hover:underline">
            Activities
          </a>
        </li>
      </ul>
    </nav>
  </div>
          <div className="flex justify-center mt-8">
            <Link
              type="button"
              href="https://checkout.xola.app/index.html#buttons/5ad4ba23cf8b9cec3a8b4607?cache=1617135314631&openExternal=true&xwm=eyJvcmlnaW4iOiJodHRwczovL2dob3N0YW5kaGF1bnQuY29tIiwiY2hhbm5lbCI6ImdteWxlZ3J6aWFNcFhlT0QifQ~~"
              className="
                bg-yellow-500 hover:bg-yellow-600 text-[#3B2712]
                px-6 py-2 rounded shadow-md transition-colors
                text-lg font-semibold xola-checkout
              "
            >
              Click Here For Frequently Asked Questions
            </Link>
          </div>
        </div>
      </footer>
        </>
    );
  }
  