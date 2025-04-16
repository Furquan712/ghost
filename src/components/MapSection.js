"use client";
import React from "react";
 

const MapSection = () => {
 
  return (
    <section className="my-10">
      <h2 className="text-3xl text-[#800] font-semibold mb-6 text-center">Visit Us</h2>
      <div className="w-full max-w-3xl mx-auto">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-83.5155,35.7345,-83.5055,35.7385&layer=mapnik"
          className="w-full h-full border-none"
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
