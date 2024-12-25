import NewsLatterBox from "@/app/components/NewsLetterBox";

const ContactP = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gradient-to-r from-[#121723] to-[#141a2a] -m-6">
      <div className="container mx-auto ">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-lg bg-gradient-to-r from-[#364d85] to-[#02154e] text-white px-8 py-10 shadow-lg dark:bg-gray-800 dark:text-white sm:p-12 lg:mb-5 lg:px-8 xl:p-12"
              data-wow-delay=".15s"
            >
              <h2 className="mb-4 text-3xl font-semibold dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Need Help? Drop Your Mail
              </h2>
              <p className="mb-10 text-lg font-medium  dark:text-gray-300">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold  dark:text-gray-200"
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
                        className="mb-2 block text-sm font-semibold  dark:text-gray-200"
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
                        className="mb-2 block text-sm font-semibold  dark:text-gray-200"
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
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactP;
