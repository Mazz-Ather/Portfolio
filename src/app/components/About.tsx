import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <div className="mx-auto  w-[100vw] text-gray-100 bg-black  py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold  sm:text-4xl">Trusted by Innovative Brands</h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          &quot;I specialize in transforming ideas into high-performance websites. My passion for Next.js ensures that each project is optimized for speed and scalability, delivering seamless user experiences. I am dedicated to understanding my clients&apos; unique needs, enabling me to craft tailored solutions that drive success. Let&apos;s build something amazing together!&quot;
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Projects Completed</dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">50+</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Tailored Features</dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Tech Stack Expertise</dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Engagements</dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">15k Views</dd>
        </div>
      </dl>
     
    </div>
  );
};

export default StatsSection;
