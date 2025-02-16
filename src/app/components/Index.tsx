import NewsLatterBox from "@/app/components/NewsLetterBox";

const ContactP = () => {
  return (
    <section
    id="contact"
    className="overflow-hidden py-16 md:py-20 lg:py-44 pt-28 md:-mt-11 bg-gradient-to-br   from-black via-gray-900 to-black "
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap">
        {/* Contact Form Section */}
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div
            className="mb-12 rounded-lg bg-gradient-to-r from-[#1a2646] to-[#02154e] text-white px-6 py-8 sm:p-12 lg:mb-5 xl:p-12 shadow-lg"
            data-wow-delay=".15s"
          >
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-3xl xl:text-4xl">
              Need Help? Drop Your Mail
            </h2>
            <p className="mb-10 text-lg font-medium">
              Our support team will get back to you ASAP via email.
            </p>
            <form>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-800 outline-none transition duration-200 focus:border-[#364d85] dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-800 outline-none transition duration-200 focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Enter your Message"
                      className="w-full resize-none rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-800 outline-none transition duration-200 focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button className="w-full rounded-md bg-black px-8 py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#0d162d] dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Contact Me
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
  
        {/* Newsletter Section */}
        <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
          <NewsLatterBox />
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ContactP;
