'use client'
import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // First question open by default

  // interface FAQItem {
  //   question: string;
  //   answer: string;
  // }

  const toggleQuestion = (index: number): void => {
    setActiveIndex((prevIndex: number) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="bg-zinc-700  md:px-28 lg:px-36">
      <div className="container px-6 py-10 mx-auto">
        <div>
          {[
            {
              question: "What types of websites do I develop?",
              answer:
                "I specialize in building modern Next.js websites, including e-commerce platforms, portfolios, and dynamic web applications with features like theme toggles, SEO optimization, and Redux state management.",
            },
            {
              question: "Do I use state management libraries?",
              answer:
                "Yes, I frequently use Redux Toolkit for state management to build scalable and maintainable applications.",
            },
            {
              question: "How do I optimize websites for SEO?",
              answer:
                "I use Next.js features like server-side rendering (SSR) and static site generation (SSG) to ensure fast load times, better indexing, and higher SEO rankings.",
            },
            {
              question: "Do I work with CMS platforms?",
              answer:
                "Yes, I integrate CMS platforms like Sanity.io to build dynamic and content-rich websites.",
            },
            {
              question: "What tools do I use for animations?",
              answer:
                "For smooth animations, I use libraries like Framer Motion and CSS transitions to create engaging user experiences.",
            },
          ].map((item, index) => (
            <div key={index} className="mb-8">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-center w-full focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`flex-shrink-0 w-6 h-6  transform ${
                    activeIndex === index ? "rotate-180 scale-125 duration-500 ease-in-out "   : "text-gray-500 "
                  } transition-transform duration-300`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-2xl text-white">
                  {item.question}
                </h1>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex items-start mt-4 px-4">
                  {/* Change bg-blue-500 to bg-blue-900 */}
                  <div className="w-1 bg-blue-900 mr-4"></div>
                  <p className="text-lg text-gray-300">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
