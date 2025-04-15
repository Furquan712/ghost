import ReviewCarousel from "@/components/ReviewCarousel";
import Image from "next/image";

// app/page.js
export default function Home() {
  return (
    // Outer div with 20% margin creates a "frame" so the global background is visible around this container.
    <main className="ml-[10%] mr-[10%] bg-[url('http://www.dev.causalfunnels.com/wp-content/uploads/2025/04/main-bg.png')] 
                     bg-cover bg-center p-8 space-y-8 text-[#3B2712] font-serif">
      {/*
        HEADER SECTION
      */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Take A Journey Into The Past
        </h1>
        <p className="text-lg leading-relaxed">
          Experience our historical ghost tour through the streets of Gatlinburg
          (or your city). Dive into the past, hear tales of haunted legends,
          and discover the spirits that roam among us today.
        </p>
      </section>
      <section className="text-center mb-10">
      <div className="text-2xl md:text-2xl font-bold mb-4">
      Trip Advisor Certificate of Excellence! (Now Travelers Choice Awards) & Certificate of Excellence Hall of Fame!
        </div>
        <p className="text-lg leading-relaxed">
          Experience our historical ghost tour through the streets of Gatlinburg
          (or your city). Dive into the past, hear tales of haunted legends,
          and discover the spirits that roam among us today.
        </p>
        <ReviewCarousel />
      </section>

      {/*
        “T-Shirts” and “NEW! Investigative Ghost Tour” SECTION
        On wider screens, display side by side.
      */}
      <section className="md:grid md:grid-cols-2 md:gap-8 space-y-8 md:space-y-0">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-2xl font-bold mb-2">New T-Shirts Now Available!</h2>
          <p className="leading-relaxed">
            We’re excited to announce the arrival of our brand new T-shirts.
            Designed with comfort and style in mind, these shirts are the
            perfect souvenir to remember your hauntingly good time.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h2 className="text-2xl font-bold mb-2">NEW! Investigative Ghost Tour</h2>
          <p className="leading-relaxed">
            Join us on our extended investigative tour! Use real ghost-hunting
            equipment to track activity as you walk the streets, hearing every
            spine-chilling story from our experienced guides.
          </p>
        </div>
      </section>

      {/*
        WHY WE ARE THE BEST & TIP SECTION
        Another two-column layout on large screens.
      */}
      <section className="md:grid md:grid-cols-2 md:gap-8 space-y-8 md:space-y-0">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Why Are We the BEST Ghost Tour In Town?</h2>
          <p className="leading-relaxed">
            Our tours are led by professional storytellers and investigators with
            a passion for preserving history and uncovering the mysterious. We’ve
            spent years unearthing the spookiest legends, ensuring our guests have
            an immersive, memorable experience.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Enjoy Your Tour? Tip Your Guide!</h2>
          <p className="leading-relaxed">
            Our guides work tirelessly to ensure you get the creeps, laughs, and
            thrills you came for. If you love your experience, feel free to show
            your appreciation by leaving a tip.
          </p>
        </div>
      </section>

      {/*
        RESERVATION + EMBEDDED VIDEO
        Stacked on small screens, side by side on medium+ screens
      */}
      <section className="md:grid md:grid-cols-2 md:gap-8 space-y-8 md:space-y-0">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Want To Make A Reservation?</h2>
          <p className="leading-relaxed mb-4">
            Book your tickets online or contact us to secure your spot! Tours are
            available every evening, and we welcome kids, families, and curious
            adventurers of all ages.
          </p>
          <p className="leading-relaxed font-bold">
            2 Hour Ghost Tour starts at 8:00 PM (Adults: $25 | Children under 12: $15)
            <br />
            <br />
            <a
              href="#"
              className="underline hover:text-red-800 transition-colors"
            >
              Click here to book online
            </a>
          </p>
        </div>

        {/* RIGHT COLUMN: VIDEO */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            title="Ghost Tour Promo Video"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}

