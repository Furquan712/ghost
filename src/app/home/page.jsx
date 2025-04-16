import ReviewCarousel from "@/components/ReviewCarousel";
import Link from "next/link";
import { FaFacebookSquare } from 'react-icons/fa';

// app/page.js
export default function Home() {
    return (
        <>
                        <main className="p-4 ml-[15%] mr-[15%] bg-[url('/main-bg.png')] 
                bg-cover bg-center  space-y-8 text-[#3B2712] font-serif">
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

   </main>

         <main className="p-4 ml-[15%] mr-[15%] bg-[url('/main-bg.png')] 
                     bg-cover bg-center  space-y-8 text-[#3B2712] font-serif">
            {/*
        HEADER SECTION
      */}


            {/*
        “T-Shirts” and “NEW! Investigative Ghost Tour” SECTION
        On wider screens, display side by side.
      */}
            <section className="md:grid md:grid-cols-2 md:gap-8 space-y-8 md:space-y-0 border-t border-b p-4">
                {/* LEFT COLUMN */}
                <div className="pr-4 lg:border-r-2">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">NEW! Investigative Ghost Tour!</h2>
                        <h2 className="text-2xl font-bold mb-2">Why are we the BEST Ghost Tour in  Town?</h2>
                        <p className="leading-relaxed">
                            We are the the best value, and the largest, most popular Ghost Tour in Gatlinburg. Why? To start, look at our trip advisor reviews, we have well over 1000 to date. We are the ONLY tour in Gatlinburg to have received Trip Advisor’s Certificate of Excellence (We have now FIVE years in a row!) We use only the best ghost hunting equipment we can find and we give you two options, The Walking Tour and an Extended Investigative Tour!.
                        </p>
                        <p className="leading-relaxed">
                            We are very excited to announce an additional new tour that steps everything up to the next level! In addition to the regular 2 hour tour, we now have an extended, investigative tour with more locations, more stories, more ghost hunting equipment and more investigations! The new tour starts at 9:00p.m. by appointment and is almost twice as long as the regular tour.  (about 3 1/2 hours long we ask that you arrive at 8:45 to check in.) Now is your chance to do actual investigations with some of the best equipment available! Be sure to click on the book now button to reserve your spot on the tour!
                        </p>
                    </div>
                    <div className="mt-6 border-t">
                        <h2 className="mt-6 text-2xl font-bold mb-2">Enjoy your Tour? Tip your guide!!</h2>
                        <p className="leading-relaxed">
                            We are so blessed to have some of the best tour guides around! If you had a good time on your tour and you enjoyed your time with your guide, don’t forget to say thank you to your guide by giving them a tip. Like waiters and waitresses they depend on your generosity for much of thier income and as I am sure you will agree, they are the best!
                        </p>
                    </div>
                    <div className="mt-6 border-t">
                        <h2 className="mt-6 text-2xl font-bold mb-2">Want To Make A Reservation?</h2>
                        <p className="leading-relaxed mb-4">
                            we will have a very special dinner on the ship with speakers giving us insights and history of the HMS Titanic as well as some tales of mysterious activity there in the Museum itself! Followed by an investigation in the museum of the great ship! Dinner guests will arrive at 9:30 pm, with dinner at 10:00 pm.  Investigation to begin at 11:00pm ending at 2:30 am. For those that wish, we will gather in the parking lot immediately following the investigation for a post investigation discussion regarding any activity we witnessed during the investigation.                        </p>
                        <p className="leading-relaxed mb-4">
                            Investigation only guests will arrive at 10:45 pm.                   </p>
                        <p className="leading-relaxed mb-4">
                            Tickets will be 250.00 per person for dinner and investigation, with investigation only tickets being 150.00 each. These prices are good before March 1st, after that time they will go up to 275.00 and 175.00 respectively.
                            Don’t miss this extremely rare and extraordinary opportunity! Tickets are available now by clicking on the book online buttons!</p>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="">
                    <div className="mt-6" >
                        <p className="leading-relaxed">


                            Explore the supernatural Gatlinburg, The Gatlinburg that most people don’t know exists. Learn the stories of the settlers, famous pioneers, loggers, solders and just regular people that have come here only to find heartbreak, misery and for some, death. This tour is no dry history lesson or haunted house, there are no actors dressed as “ghosts” ready to jump out at you at every turn, rather it is a walking tour of Gatlinburg that mixes tales of historical fact, legend and visits to the actual places where a number of the more “colorful” people and events have happened in Gatlinburg’s history, many with a twist of the macabre.
                        </p>
                        <p className="leading-relaxed">
                            True believers and skeptics alike will find themselves drawn to these stories and places where actual events and sightings took place. We ask that you have an open mind, for you will have a much better chance to become another in the long list of people to go home after the tour with an amazing tale to tell about your own experience with the paranormal.
                        </p>
                        <p className="leading-relaxed">Had a great time on the tour and you want to show off to the world that you survived the experience?

                            Get a Ghost & Haunt Tour of Gatlinburg glow in the dark T-shirt with our new design!

                            25.00 each, size’s S,M,L,XL,XXL,XXXL

                        </p>
                    </div>
                    <div className="mt-6 border-t">
                        <h2 className="mt-6 text-2xl font-bold mb-2">Ghosts In Gatlinburg?</h2>
                        <iframe width="450" height="275" src="https://www.youtube.com/embed/iY-skp4XrMM?si=99CYEGr2zJbhGEZa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                    </div>
                    <div className="mt-6 border-t">
                        <h2 className="mt-6 text-2xl font-bold mb-2">Want To Make A Reservation?</h2>
                        <p className="leading-relaxed mb-4 ">
                            Click below and make your reservation for your visit to Ghost and Haunt Tours of Gatlinburg, The Ghost Hunting Experience or the Private Tour
                        </p>
                        <p className="leading-relaxed font-bold text-center">
                            Everyday at 9:00 pm check in at 8:30 pm | Adults: $25 plus tax | Children 12 and under $15 plus tax
                            </p>
                            <br />
                            <p className="leading-relaxed mb-4">
                                November and December start times are 7:00 pm with 6:30 check in, Closed January and February.   
                                                  </p>        
                            <p className="leading-relaxed mb-4">


                                $2.00 OFF FOR BOOKING ONLINE Use the code “ghost2off” to get $2.00 off any adult ticket!
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
                    <div className=" flex justify-between mt-6 border-t">
                        <div className="w-1/2 border-r pr-2 ">
                        <h2 className="mt-6 text-lg font-bold mb-2">TITANIC!</h2>
                        <p className="leading-relaxed mb-4">
                        We are proud to announce that we have been given a special and rare opportunity to do a midnight investigation in the Titanic Museum in Pigeon Forge Tn!
                        <br/> 
                        On the night of Friday, July 11th 2025 </p>
                        </div>
                        <div className="w-1/2 pl-2 mt-8">
                         <Link href="https://www.facebook.com/GhostandHauntToursofGatlinburg" target="_blank" rel="noopener noreferrer" className="w-100 text-blue-800 hover:text-blue-900 flex items-center mb-4"><FaFacebookSquare /></Link>
                        <p className="leading-relaxed mb-4">
                        “For all the latest exciting news, check our Facebook page!” </p>
                        </div>
                    </div>
                </div>

            </section>

        </main>
                <main className="p-4 ml-[15%] mr-[15%] bg-[url('/main-bg.png')] 
                bg-cover bg-center  space-y-8 text-[#3B2712] font-serif">
                                <section className="text-center">
                <div className="text-2xl md:text-2xl font-bold ">
                    Trip Advisor Certificate of Excellence! (Now Travelers Choice Awards) & Certificate of Excellence Hall of Fame!
                </div>
                <div className=" justify-center mt-4 ">
                <img src="/Tripadvisor_lockup_horizontal_secondary_registered.png" alt="Trip Advisor Certificate of Excellence" className="w-1/4 h-auto mx-auto mt-4" />
                    <img src="/tchotel_2020_L-14348-2-removebg-preview.png" alt="Trip Advisor Certificate of Excellence" className="w-1/4 h-auto mx-auto mt-4" />
                </div>
                <p className="text-lg leading-relaxed">
                    Experience our historical ghost tour through the streets of Gatlinburg
                    (or your city). Dive into the past, hear tales of haunted legends,
                    and discover the spirits that roam among us today.
                </p>
                <ReviewCarousel />
            </section>

   </main>
        </>


    );
}

