// app/Header.js (or wherever you store your components)
export default function Header() {
    return (
      <header
        className="
          bg-[url('/paper-header-1.png')]
          bg-cover bg-center
          text-[#3B2712] font-serif
          ml-[15%] mt-[10%] mr-[15%]
          py-4
        "
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Top row: Raven + Title + Nav */}
          <div className="container mx-auto flex flex-col items-center justify-center gap-4">
    {/* Raven Image */}
    <div className="flex mt-6">
      <img
        src="http://www.dev.causalfunnels.com/wp-content/uploads/2025/04/Screenshot-2025-04-10-002819.png"
        alt="Raven"
        className="w-150 h-auto"
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
  
          {/* Subtext/Phone */}
          <div className="mt-4 text-center text-sm md:text-base">
            GATLINBURG, TENNESSEE – 865-661-1980
            <br />
            BOOK ONLINE BELOW TO RESERVE YOUR TOUR, IF YOU DARE!
          </div>
          
        </div>
      </header>
    );
  }
  