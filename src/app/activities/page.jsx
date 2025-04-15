// app/page.js
export default function Activities() {
    return (
      <main
        className="
ml-[10%] mr-[10%] bg-[url('http://www.dev.causalfunnels.com/wp-content/uploads/2025/04/main-bg.png')] 
                     bg-cover bg-center p-8 space-y-8 text-[#3B2712] font-serif
        "
      >
        {/* Page Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Ghost and Haunt Tours of Gatlinburg
        </h1>
  
        {/* Cards Container */}
        <div className="max-w-6xl mx-auto px-4">
          {/* First Row (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Card 1 */}
            <div
              className="
                bg-white/80 
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
                src="https://via.placeholder.com/500x300?text=Titanic+%21+Dinner+and+Investigation"
                alt="Titanic Dinner and Investigation"
                className="w-full h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">
                TITANIC! Dinner and Investigation.
              </h2>
              <p className="text-center mb-4">
                Enjoy a unique dinner experience aboard the world-famous Titanic and join our special investigation.
              </p>
              <button
                className="
                  bg-red-700 
                  text-white 
                  px-4 
                  py-2 
                  rounded 
                  hover:bg-red-800 
                  transition-colors 
                  duration-300
                "
              >
                BOOK NOW
              </button>
            </div>
  
            {/* Card 2 */}
            <div
              className="
                bg-white/80 
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
                src="https://via.placeholder.com/500x300?text=Titanic+Investigation+Only"
                alt="Titanic Investigation Only"
                className="w-full h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">
                TITANIC! Investigation only
              </h2>
              <p className="text-center mb-4">
                Take part in a guided investigation with real equipment—no dinner, all thrills.
              </p>
              <button
                className="
                  bg-red-700 
                  text-white 
                  px-4 
                  py-2 
                  rounded 
                  hover:bg-red-800 
                  transition-colors 
                  duration-300
                "
              >
                BOOK NOW
              </button>
            </div>
          </div>
  
          {/* Second Row (2 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 3 */}
            <div
              className="
                bg-white/80 
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
                src="https://via.placeholder.com/500x300?text=Haunted+Silhouette"
                alt="Haunted Silhouette"
                className="w-full h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">
                Thrilling Night Walk
              </h2>
              <p className="text-center mb-4">
                Experience the eerie streets by moonlight with ghostly stories at every turn.
              </p>
              <button
                className="
                  bg-red-700 
                  text-white 
                  px-4 
                  py-2 
                  rounded 
                  hover:bg-red-800 
                  transition-colors 
                  duration-300
                "
              >
                BOOK NOW
              </button>
            </div>
  
            {/* Card 4 */}
            <div
              className="
                bg-white/80 
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
                src="https://via.placeholder.com/500x300?text=Ghost+and+Haunt"
                alt="Ghost and Haunt"
                className="w-full h-auto object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">
                Ghost and Haunt Special
              </h2>
              <p className="text-center mb-4">
                Dive deep into Gatlinburg’s haunted history with our longest-running ghost tour.
              </p>
              <button
                className="
                  bg-red-700 
                  text-white 
                  px-4 
                  py-2 
                  rounded 
                  hover:bg-red-800 
                  transition-colors 
                  duration-300
                "
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  