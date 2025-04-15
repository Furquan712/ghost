// app/Footer.js (or wherever you store your components)
export default function Footer() {
    return (
      <footer
        className="
          bg-[url('http://www.dev.causalfunnels.com/wp-content/uploads/2025/04/bird-paper2.png')]
          bg-cover bg-center 
          text-[#3B2712] font-serif
          ml-[10%] mb-[10%] mr-[10%]

          py-20
        "
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Two-column layout on larger screens */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: "Schedule a Tour" */}
            <div>
              <h2 className="text-3xl font-bold mb-4">SCHEDULE A TOUR</h2>
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
              <h2 className="text-3xl font-bold mb-4">Enjoyed your tour? Leave us a review!</h2>
              <p className="mb-4 leading-relaxed">
                If you enjoyed your experience on the tour, please leave us a review on TripAdvisor!
                We greatly value your feedback and appreciate hearing your thoughts. 
                Have suggestions on making the tour even better? 
                Email us directly at{" "}
                <a
                  href="mailto:ghostwalksanta@example.com"
                  className="underline hover:text-red-800 transition-colors"
                >
                  ghostwalksanta@example.com
                </a>.
              </p>
  
              <button
                type="button"
                className="
                  inline-block bg-[#800] hover:bg-red-800 text-white
                  py-2 px-5 rounded shadow-md transition-colors mb-4
                "
              >
                BOOK NOW
              </button>
  
              {/* Optional image (e.g., a crow or raven in the bottom corner) */}
              <div className="mt-4">
                <img
                  src="https://via.placeholder.com/80x80.png?text=Raven"
                  alt="Raven Illustration"
                  className="w-16 h-auto"
                />
              </div>
            </div>
          </div>
  
          {/* Bottom Center FAQ Button */}
          <div className="flex justify-center mt-8">
            <button
              type="button"
              className="
                bg-yellow-500 hover:bg-yellow-600 text-[#3B2712]
                px-6 py-2 rounded shadow-md transition-colors
                text-lg font-semibold
              "
            >
              Click Here For Frequently Asked Questions
            </button>
          </div>
        </div>
      </footer>
    );
  }
  