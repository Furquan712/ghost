"use client";
import React, { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Home from './home/page';
import OurStories from './ourstories/page';
import Activities from './activities/page';

export default function Header() {
  // State to keep track of which tab is active
  const [activeTab, setActiveTab] = useState('Home');
  const nodeRef = useRef(null);

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
      <header
        className="
          bg-[url('/paper-header-1.png')]
          bg-cover bg-center
          text-[#3B2712] font-serif
          ml-[15%] mt-[5%] mr-[15%]
          py-4
        "
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Top row: Raven + Title + Nav */}
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
            {/* Raven Image */}
            <div className="flex mt-2">
              <img
                src="http://www.dev.causalfunnels.com/wp-content/uploads/2025/04/Screenshot-2025-04-10-002819.png"
                alt="Raven"
                className="w-100 h-auto"
              />
            </div>
            {/* Navigation */}
            <nav>
              <ul className="flex items-center gap-4 text-lg font-semibold">
                <li className={`${activeTab === 'Home' ? 'border-b-2 border-[#3B2712]' : ''}`}>
                  <button 
                    onClick={() => setActiveTab('Home')} 
                    className="hover:underline focus:outline-none"
                  >
                    Home
                  </button>
                </li>
                <li className={`${activeTab === 'Our Stories' ? 'border-b-2 border-[#3B2712]' : ''}`}>
                  <button 
                    onClick={() => setActiveTab('Our Stories')} 
                    className="hover:underline focus:outline-none"
                  >
                    Our Stories
                  </button>
                </li>
                <li className={`${activeTab === 'Activities' ? 'border-b-2 border-[#3B2712]' : ''}`}>
                  <button 
                    onClick={() => setActiveTab('Activities')}
                    className="hover:underline focus:outline-none"
                  >
                    Activities
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Subtext/Phone */}
          <h3 className="mt-4 text-center text-sm md:text-base">
            GATLINBURG, TENNESSEE – (423) 438-2304
            <br />
            BOOK ONLINE BELOW TO RESERVE YOUR TOUR, IF YOU DARE!
          </h3>
        </div>
      </header>

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
              {renderTabComponent()}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
