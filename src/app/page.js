"use client";
import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Home from './home/page';
import OurStories from './ourstories/page';
import Activities from './activities/page';
import Link from "next/link";


export default function Header() {
  // State to keep track of which tab is active
  const [activeTab, setActiveTab] = useState('Home');
  const [isClient, setIsClient] = useState(false); // Track if the component is client-side
  const nodeRef = useRef(null);

  const scrollToTop = () => {
    if (isClient) {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }
  };
  
  useEffect(() => {
    // Set isClient to true when component has mounted (client-side)
    setIsClient(true);

    // Scroll to the top when the activeTab changes
    scrollToTop();
  }, [activeTab]); // Dependency on activeTab to trigger scroll when it changes

  // Function to return the component based on the current active tab
  const renderTabComponent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Our Stories':
        return <OurStories />;
      case 'Activities':
        return <Activities />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Container for 3D perspective */}
      <div className="tab-content-container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={activeTab}
            timeout={1900}
            classNames="flip-page"
            nodeRef={nodeRef}
          >
            <div ref={nodeRef} className="tab-content">
              <header
                className="
          bg-[url('/main-bg.png')]  sm:bg-[url('/paper-header-1.png')]
          bg-cover bg-center
          text-[#3B2712] font-serif
          ml-[5%] mt-[5%] mr-[5%] sm:ml-[15%] sm:mt-[5%] sm:mr-[15%]
          py-4
        "
              >
                <div className="max-w-5xl flex justify-center sm:w-full sm:justify-end ">
                  {/* Top row: Raven + Title + Nav */}

                  <div className="container flex flex-col items-center w-full gap-2 sm:w-3/4 sm:flex-row">

                    {/* Raven Image */}
                    <div></div>
                    <div className="flex flex-col justify-center items-center p-4 sm:p-0">
                      <div className="flex justify-between mt-4 ">
                        <img
                          src="/header-heading.png"
                          alt="Raven"
                          className="w-100 h-auto"
                        />
                      </div>
                      {/* Navigation */}
                      <nav className='flex items-start justify-between mt-4'>
                        <ul className="flex items-center gap-6 text-lg font-semibold">
                          <li className={`${activeTab === 'Home' ? 'border-b-2 border-[#3B2712]' : ''}`}>
                            <button
                              onClick={() => setActiveTab('Home')}
                              className="hover:underline focus:outline-none"
                            >
                              HOME
                            </button>
                          </li>
                          <li className={`${activeTab === 'Activities' ? 'border-b-2 border-[#3B2712]' : ''}`}>
                            <button
                              onClick={() => setActiveTab('Activities')}
                              className="hover:underline focus:outline-none"
                            >
                              ACTIVITIES
                            </button>
                          </li>
                          <li className={`${activeTab === 'Our Stories' ? 'border-b-2 border-[#3B2712]' : ''}`}>
                            <button
                              onClick={() => setActiveTab('Our Stories')}
                              className="hover:underline focus:outline-none"
                            >
                              FAQ
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <div className='side-header flex flex-col  items-center  mt-6 justify-center'>
                      <img
                        src="/tchotel_2020_L-14348-2-removebg-preview.png"
                        alt="Raven"
                        className="w-50 h-auto"
                      />
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
              </header>
              <main
                className="
                  ml-[5%] mr-[5%] sm:ml-[15%] sm:mr-[15%] bg-[url('/main-bg.png')] 
                     bg-cover bg-center text-[#3B2712] font-serif p-4
        "
              >
                {/* Subtext/Phone */}
                <h3 className="text-center text-sm md:text-base">
                  GATLINBURG, TENNESSEE – (423) 438-2304
                  <br />
                  BOOK ONLINE BELOW TO RESERVE YOUR TOUR, IF YOU DARE!
                </h3>
              </main>


              <div>
                {renderTabComponent()}
              </div>

              <div>
                <footer
                  className="
          bg-[url('/main-bg.png')]
          bg-cover bg-center 
          text-[#3B2712] font-serif
          ml-[5%] mr-[5%] sm:ml-[15%] sm:mr-[15%]

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
                        <h2 className="text-3xl font-bold mb-4">Enjoyed your tour? Leave us a review!</h2>
                        <p className="mb-4 leading-relaxed">
                          If you enjoyed your experience on the tour, please leave us a review on Trip Advisor! We try very hard to give all our customers as enjoyable an experience as possible and we would love it if you share that. Have suggestions on making the tour even better? Email us directly at {" "}
                          <a
                            href="mailto:ghostwalksanta@gmail.com"
                            className="underline hover:text-red-800 transition-colors"
                          >
                            ghostwalksanta@gmail.com
                          </a>.
                        </p>
                        <h2 className="text-2xl font-bold mb-4">BOOK ONLINE - IF YOU DARE!</h2>

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
          ml-[5%] mb-[10%] mr-[5%] sm:ml-[15%] sm:mr-[15%]  p-8
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
                    <div className='flex justify-center p-8 sm:p-2'>
                    <div className={`${activeTab === 'Our Stories' ? ' border-[#3B2712]' : ''}`}>
                      <button
                        onClick={() => setActiveTab('Our Stories')}
                        className="
                            bg-yellow-500 hover:bg-yellow-600 text-[#3B2712]
                            px-6 py-2 rounded shadow-md transition-colors
                            text-lg font-semibold xola-checkout
                          "
                      >
                        Click Here For Frequently Asked Questions
                      </button>
                    </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
