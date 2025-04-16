// components/Marquee.jsx
"use client";
import React from 'react';

export default function Marquee() {
  // Define your headlines
  const headlines = [
    "We are proud to announce that we have been given a special and rare opportunity to do a midnight investigation in the Titanic Museum in Pigeon Forge, TN!",
    "On the night of Friday, July 11th 2025",
  ];

  // Duplicate the headlines to create a seamless scroll effect.
  const marqueeContent = [...headlines, ...headlines];

  return (
    <section className="overflow-hidden ">
      <div className="marquee whitespace-nowrap flex">
        {marqueeContent.map((headline, index) => (
          <span key={index} className="mx-4 text-lg font-bold">
            {headline}
          </span>
        ))}
      </div>
      <style jsx>{`
        .marquee {
          /* The animation duration, timing function, and infinite loop */
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
