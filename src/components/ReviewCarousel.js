"use client";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Kelly Altenau",
    date: "February 2025",
    text: "The best thing we did throughout our 2 weeks in Hawaii. Captain Francesco and Nick were awesome, they made the trip so perfect and we would recommend them to anyone. There were 6 of us on the boat and we had plenty of room to lounge out on the ride to Turtle Canyon. The snorkel gear they provided was good quality. We had almost an hour to snorkel which was perfect. We are already planning our Hawaii trip for next year and doing another charter with them is on our “must do” list!",
  },
  {
    name: "Andrew Yeoman",
    date: "April 2025",
    text: "Super nice experience with Sam & Masi. Clean, comfortable, and safe. Sam & Masi were very friendly, easy to spend time with, and demonstrated a true love of being out on the water. Although we were near the much larger tour operators, the benefits of being on a more intimate set up were clear. Freedom to explore more of the reef, and support when our kid felt a little freaked out by the experience of all the fish. Seeing the turtles ruled and after, we took a unique way back to harbor and had a pod of dolphins travel with us for 10 minutes, literally 3-4 feet beneath our feet off the bow.",
  },
  {
    name: "Liz Kawananakoa",
    date: "March 2025",
    text: "Outstanding experience from the beginning to the end. There was excellent communication, a spotless boat, departure and arrival on time, an attentive & polite crew, refreshments were offered, we saw whales and dolphins and a spectacular sunset. What more could anyone ask for? My friends and I will absolutely charter with this outfit again. Mahalo!",
  },
  {
    name: "Michelle Migneault",
    date: "March 2025",
    text: "One of our highlights from our vacation in Hawaii. It being a smaller group made our experience feel so much more personal. We were able to see turtles and got surprised with a pod of dolphins swimming by the boat. It was an incredible experience!",
  },
  {
    name: "Megan Torbert",
    date: "February 2025",
    text: "Hawaii Ocean Charters is great! These guys are fun and being limited to a group of 6 people on a snorkel tour is amazing. It actually only ended up being 4 of us on the tour which was even better. Both the guys on the boat were super knowledgeable and genuinely excited to be there! It was a very choppy day, yet they still lined us up with some turtles and we even got to see an octopus (Tako)! 10/10 Recommend them for snorkeling in Waikiki!",
  },
  {
    name: "Anthony Carbone",
    date: "November 2024",
    text: "We did a charter for five people with Francesco and Nick, and it was the Highlight of our trip. These guys were incredibly kind and made the trip fun and laid back. Definitely did not feel like your normal guided tour. These guys wanna do what YOU wanna do. Nick spotted sea turtles and dolphins, and Francesco would steer accordingly to get you the best view and offer snorkel gear as needed. The guys had a cooler with non-alcoholic drinks and all the gear you needed to get in the water. It was insane how welcoming and easygoing they were. I can not say enough good things about them both! 10 out of 10 would do it again. Make sure you bring tipping money because you're going to feel that a $&# getting off that boat and not treating them how they treated you. If you must cancel other excursions to make this one work, cancel them. You will not regret it. DID I MENTION they even brought a go-pro for you to dive in with? There is no extra charge; they airdrop you the footage. Insane. Insane.",
  },
  {
    name: "Erika Hernandez Calvo",
    date: "February 2025",
    text: "They are the best! Wonderful service, beautiful setting, great music, awesome charming Captain and Guide! My husband booked this trip for my birthday and I can say that it was the best gift ever! The enthusiasm and knowledge of the crew are outstanding. I really enjoyed every second of it. Mother Nature gave me the rest to make this experience one of the best birthdays ever! Forever thankful, recommend this tour 1000000%! Gracias Francesco and Mossy, Pura Vida!",
  },
  {
    name: "Bryan Ramos",
    date: "April 2025",
    text: "Absolutely incredible experience with Hawaii Ocean Charters! Francesco and Nick are true ocean experts who made our 6-hour private catamaran cruise unforgettable. Their 30-foot catamaran Keanuenue (Hawaiian for Rainbow) was perfect for our group of 5. We sailed from Ala Moana, found multiple perfect spots to cool down and snorkel, and were treated to amazing wildlife sightings - dolphins, turtles, a whale, and even a baby octopus! The guys encouraged us to bring our own beverages (they provide coolers) and connect our music via Bluetooth, creating the perfect personalized atmosphere. The highlight was watching a gorgeous sunset as we sailed back to the pier. I've used them more than once, and each time somehow exceeds the last. If you want a genuinely educational AND fun ocean experience with top-notch service, Hawaii Ocean Charters is unbeatable!",
  },
  {
    name: "Mykyn Woods",
    date: "April 2025",
    text: "Absolutely amazing experience!!! First they were so accommodating in helping us move our reservation as rain was expected during our scheduled time. Fortunately there was an open slot the next morning. We went out with Chase and Sam….the best! They may do this 4-5 times a day but they made us feel like we were their first customers. Great personalities…very knowledgeable….the boat was clean/gear was clean, they were great with my teens, they loved them and felt comfortable/trusted them out there snorkeling. We private charter pretty frequently on our trips to different locations…..and I would for sure put this on our top 2 best boating experiences. I would HIGHLY recommend this!",
  },
  {
    name: "Joe Arrowsmith",
    date: "April 2025",
    text: "We had a great experience on the semi-private trip to Turtle Canyon. Captain Sam and Mossy were great hosts! Turtle Canyon is very popular. We'd totally recommend this small charter (6 people max) as the best way to experience it out of Waikiki. You won't waste time waiting in line. Great equipment. One on one instruction. And freedom to explore more of the reef. We were able to see some dolphins on the way home as well. The boat is fun and comfortable. Thanks again to the crew!",
  },
  {
    name: "Susan Stevens",
    date: "January 2025",
    text: "Absolutely the BEST! Our family of five spent Christmas morning on the water with Sam and Mossi (sp?). We were out at sunrise to watch day break over Diamond Head, then we followed whales breaching. We ended up on a reef to snorkel with 7-8 turtles. The turtles swam right past us, surfaced several times and were indifferent to us (but we gave them their space!) Mossi dove with us and made sure that we saw everything- teaching us about the other species. The guys were a wealth of information and so much fun- our family immediately connected with them. Our only regret is not chartering longer!",
  },
  {
    name: "Stacey Crawford",
    date: "November 2024",
    text: "My family traveled on this beautiful catamaran to spread my fathers ashes and celebrate his life. We wanted to do this at sunset and end with the fireworks show as my dad loved both things. The crew was attentive, offered compassion and provided a wonderful experience. The boat was clean and beautiful. Plenty of room for our six guests. I hope to enjoy another boating experience in the future with this team and boat! Thank you so much for making our experience beautiful.",
  },
  {
    name: "Matt Miles",
    date: "December 2024",
    text: "Francesco and Sam were amazing! Francesco called us in advance of the cruise as it was quite windy and gave us the option to reschedule for calmer waters, without fee. After he confirmed it was safe to go out, as long as we were ok with a little spray, we had a fantastic time! The snorkeling, music, local history knowledge, and surprise interactive sea life experience was second to none. He’s a great Captain and we had a blast! Couldn’t have asked for a better crew.",
  },
  {
    name: "Wendy Carbone",
    date: "November 2024",
    text: "I booked a private Catamaran charter for my family and Francesco and Nick were amazing! They really took the time to personalize the tour based on our interests and were friendly, knowledgable and made us feel right at home. Nick dropped us in the water at an awesome spot where there were sea turtles and tons of beautiful fish nearby and Francesco jumped in to guide us around and tell us about the fish. Upon leaving, a pod of dolphins found us and played behind the boat for a while which was so much fun to watch! I especially appreciate their consideration for the surrounding boaters and environment. When they saw debris in the water, they took the time to stop and clean it up. This was a top notch experience, and we’d absolutely do it again!",
  },
  {
    name: "Michelle Stiles",
    date: "November 2024",
    text: "Great time with the family! We enjoyed swimming with the turtles! Plenty of fish to see as well! Francesco and Sam were great hosts! They made us feel welcome and safe. I highly recommend this adventure! We went on the 9:30 am trip and the water was nice.",
  },
  {
    name: "Paula Luedtke",
    date: "March 2025",
    text: "I went on the small group Turtle Snorkeling. I've done a lot of snorkeling and this was by far the best experience. We saw multiple huge turtles and we were constantly surrounded by fish. The boat was clean and the crew were so welcoming, nice and fun. We even saw a whale and her baby. Highly recommend!",
  },
  {
    name: "Aldo Acosta",
    date: "March 2025",
    text: "We booked a Tour w Francesco & Masa (don’t know how to spell his name) on Jan 16. The experience we had with them was amazing their ability to scout dolphins, turtles, aquatic life out in the water is definitely the best in Honolulu. Masa offered to take our go pro and captured our incredible videos of the aquatic life in the water. The experience with these guys was so great we booked another tour but unfortunately they didn’t have any openings for the remaining of our trip & had to try out another company and it was a let down. Whenever we’re back in Honolulu Hawaii Ocean Charters is the company we’re booking with! P. S these guys don’t bombard constantly about tips! The other company we booked with every other sentence said was about tips which was annoying when you’re just trying to enjoy the experience we booked.",
  },
  {
    name: "Cathy M",
    date: "March 2024",
    text: "The crew were amazing guides for this amazing experience! We signed up for the 7:15 excursion on the private charter. We loved that they take only 6 people out. They offer drinks and have great snorkel gear and fins to borrow. The crew went over safety first instructions and made sure you were ok on the boat and in the waters. There were so many fish and turtles. At the end of our trip we saw a couple of humpback whales. Perfect way to end the excursion. Highly recommended! Online reservation & waivers were smooth.",
  },
  {
    name: "Nick DiLauro",
    date: "December 2024",
    text: "Amazing time for a fair price! Crew was great and the boat was clean and so relaxing. The turtles were cool but my favorite part was sailing the open waters with a few drinks!",
  },
  {
    name: "Jennifer Ashmore",
    date: "March 2025",
    text: "Such an incredible trip. The boat was so nice and comfortable with the bean bag seating on the bow. Captains Sam and Francesco could not have been nicer to spend the day with. I was really impressed with their knowledge of the ocean and marine life. We saw so many fish and spectacular sea turtles! I can’t recommend this charter enough. Having such a small group made this really special.",
  },
  {
    name: "Nicolas Raji",
    date: "March 2025",
    text: "Nacho and Sam were the BEST! The boat ride was incredible and we found and held an octopus. This a quality service and we all recommend it. 11/10",
  },
  {
    name: "Nicolas Raji",
    date: "March 2025",
    text: "Nacho and Sam were the BEST! The boat ride was incredible and we found and held an octopus. This a quality service and we all recommend it. 11/10",
  }
];

export default function ReviewCarousel() {
  // State for current starting index and modal
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // New state to track how many items per view should be visible
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update itemsPerPage based on window width
  useEffect(() => {
    function updateItemsPerPage() {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile: 1 card per view
        setItemsPerPage(1);
      } else if (width < 1024) {
        // Tablet: 2 cards per view
        setItemsPerPage(2);
      } else {
        // Desktop: 3 cards per view
        setItemsPerPage(3);
      }
      // Reset currentIndex in case the new maxIndex is lower than before
      setCurrentIndex(0);
    }
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Calculate maximum index based on itemsPerPage
  const maxIndex = reviews.length - itemsPerPage;

  // Adjust slide function to use itemsPerPage for boundaries and translate percentage
  const slide = (direction) => {
    setCurrentIndex((prevIndex) =>
      Math.min(Math.max(prevIndex + direction, 0), maxIndex)
    );
  };

  const openModal = (index) => {
    setModalContent(reviews[index].text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-10 overflow-hidden">
      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-2 -translate-y-1/2 text-3xl cursor-pointer z-10 select-none"
        onClick={() => slide(-1)}
      >
        &#10094;
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{ minWidth: `${100 / itemsPerPage}%` }}
              className=" rounded-xl shadow-2xl mx-2 p-5 box-border transform transition duration-300 hover:scale-105 custom-3d"
            >
              <h3 className="text-lg font-bold">{review.name}</h3>
              <small className="text-gray-500">{review.date}</small>
              <div className="text-yellow-500 text-xl">★★★★★</div>
              <p>{review.text.substring(0, 120)}...</p>
              <span
                className="text-blue-500 cursor-pointer mt-2 inline-block"
                onClick={() => openModal(index)}
              >
                Read more
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-2 -translate-y-1/2 text-3xl cursor-pointer z-10 select-none"
        onClick={() => slide(1)}
      >
        &#10095;
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="rounded-xl bg-yellow-100 p-5 max-w-lg max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-2 right-2 text-xl cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <div>{modalContent}</div>
          </div>
        </div>
      )}
      {/* Custom CSS for 3D animation */}
      <style jsx>{`
        .custom-3d {
          perspective: 1000px;
        }
        .custom-3d:hover {
          transform: perspective(1000px) rotateY(10deg) scale(1.05);
        }
      `}</style>
    </div>
  );
}
