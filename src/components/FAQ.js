import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What do we do when it rains?",
      answer: {
        paragraph1: "First, rain here tends to occur during the heat of the day, and by the time the tour starts, it is typically over. If not, we typically see a few short showers that are not very intense. We do the tour Rain or Shine, with the very rare exception of bad lightning overhead. If our guide feels it is dangerous, we may cancel a tour, but that is rare.",
        paragraph2: "On the rare occasion that it rains substantially, we seek nearby shelter and tell extra stories to keep the experience enjoyable. We offer re-usable, thicker ponchos for $5 each, and you can bring umbrellas if rain is expected!"
      }
    },
    {
      question: "Is this age appropriate for my child?",
      answer: {
        paragraph1: "We leave the decision up to you as parents. If your 8-year-old loves ghost hunting shows, they may enjoy the tour. However, if your child is sensitive or frightens easily, this may not be the best experience for them. Please consider your child’s temperament when deciding."
      }
    },
    {
      question: "What is your refund policy?",
      answer: {
        paragraph1: "Customers can receive a full refund if the tour is cancelled up to 24 hours before the scheduled start. Within the 24-hour window, no refunds are available, but we will reschedule your tour at no additional charge."
      }
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion" className="space-y-4">
      {faqData.map((faq, index) => (
        <div key={index} className="bg-yellow-100 border border-gray-200 rounded-xl">
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-5 font-medium text-black-500 border-b border-gray-200 rounded-t-xl hover:bg-yellow-200 focus:ring-4 focus:ring-gray-200"
              aria-expanded={activeIndex === index ? "true" : "false"}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-3 h-3 transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 10 6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            className={`p-5 border-t-0 ${activeIndex === index ? "block" : "hidden"}`}
          >
            {Object.values(faq.answer).map((paragraph, i) => (
              <p key={i} className="text-gray-500">{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
