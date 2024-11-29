'use client'
import { useEffect, useRef, useState } from 'react'
import KeenSlider, { KeenSliderInstance } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

const Testimonials = () => {
  const [sliderInstance, setSliderInstance] = useState<KeenSliderInstance | null>(null)
  const keenSliderRef = useRef<HTMLDivElement | null>(null)
  const keenSliderActiveRef = useRef<HTMLSpanElement | null>(null)
  const keenSliderCountRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const initializeSlider = () => {
      if (keenSliderRef.current) {
        const slider = new KeenSlider(keenSliderRef.current, {
          loop: true,
          defaultAnimation: { duration: 750 },
          slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
          },
          breakpoints: {
            '(min-width: 640px)': {
              slides: { origin: 'center', perView: 1.5, spacing: 16 },
            },
            '(min-width: 768px)': {
              slides: { origin: 'center', perView: 2, spacing: 16 },
            },
            '(min-width: 1024px)': {
              slides: { origin: 'center', perView: 3, spacing: 16 },
            },
            '(min-width: 1440px)': {
              slides: { origin: 'center', perView: 4, spacing: 16 },
            },
          },
          created(slider) {
            setSliderInstance(slider)
            slider.slides[slider.track.details.rel].classList.remove('opacity-40')
            if (keenSliderActiveRef.current && keenSliderCountRef.current) {
              keenSliderActiveRef.current.innerText = (slider.track.details.rel + 1).toString()
              keenSliderCountRef.current.innerText = slider.slides.length.toString()
            }
          },
          slideChanged(slider) {
            slider.slides.forEach((slide) => slide.classList.add('opacity-40'))
            slider.slides[slider.track.details.rel].classList.remove('opacity-40')
            if (keenSliderActiveRef.current) {
              keenSliderActiveRef.current.innerText = (slider.track.details.rel + 1).toString()
            }
          },
        })
        return () => slider.destroy()
      }
    }
    
    const timeoutId = setTimeout(initializeSlider, 100)
    return () => clearTimeout(timeoutId)
  }, [])

  const reviews = [
    {
      name: 'Sara Lee',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'Mazz Ather is not only skilled but also very kind and supportive. He made the entire process seamless. I could not be happier!',
    },
    {
      name: 'John Doe',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'I was blown away by Mazz Ather s work ethic and attention to detail. If you need a website done right, he is your guy!',
    },
    {
      name: 'Emily Tran',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'Working with Mazz Ather was a pleasure! His expertise brought my vision to life in a way I never imagined.',
    },
    {
      name: 'Carlos Ruiz',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'Mazz Ather is phenomenal! He is patient, detail-oriented, and truly goes above and beyond for his clients.',
    },{
      name: 'Paul Starr',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'I highly recommend working with Mazz Ather! He is incredibly dedicated and delivered a website that exceeded my expectations.',
    },
    {
      name: 'Sophie Chen',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'Mazz Ather transformed our digital presence completely! The results have been nothing short of extraordinary.',
    },
    {
      name: 'Marcus Johnson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'Working with Mazz Ather was the best decision for our business. Our conversion rates have doubled!',
    },
    {
      name: 'Aria Patel',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'Mazz Ather has a rare talent for turning complex requirements into elegant solutions. Simply outstanding!',
    },
    {
      name: 'Lucas Kim',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: `The level of professionalism and technical expertise Mazz Ather brings to the table is remarkable.`,
    },
    {
      name: 'Isabella Martinez',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80',
      text: 'From start to finish, Mazz Ather demonstrated exceptional skill and commitment. A true professional!',
    }
    
    // ... other reviews
  ]

  const goToPrevious = () => {
    if (sliderInstance) {
      sliderInstance.prev()
    }
  }

  const goToNext = () => {
    if (sliderInstance) {
      sliderInstance.next()
    }
  }

  return (
    <section className="bg-black relative py-12 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl mb-12 capitalize">
          Read trusted reviews from our customers
        </h2>

        <div className="relative">
          <div ref={keenSliderRef} className="keen-slider overflow-hidden">
            {reviews.map((review, i) => (
              <div key={i} className="keen-slider__slide opacity-40 transition-opacity duration-800">
                <blockquote className="rounded-lg bg-gray-900 p-6 h-full">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        alt={review.name}
                        src={review.image}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-100">{review.name}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-100">{review.text}</p>
                </blockquote>
              </div>
            ))}
          </div>

  {/* Navigation Arrows */}
<div className="flex justify-center gap-4 mt-3">
  <button
    onClick={goToPrevious}
    className="bg-black/10 hover:bg-white/10 rounded-full p-2 text-white transition-all"
    aria-label="Previous slide"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <div className="flex items-center gap-2 text-white">
    <span ref={keenSliderActiveRef}>1</span>
    <span>/</span>
    <span ref={keenSliderCountRef}>{reviews.length}</span>
  </div>

  <button
    onClick={goToNext}
    className="bg-black/10 hover:bg-white/10 rounded-full p-2 text-white transition-all"
    aria-label="Next slide"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

          {/* Slide Counter */}
       {/* <div  className="left-1/2 -translate-x-1/2 flex items-center gap-2 text-white bg-black/50 px-4 py-2 rounded-full">
            <span ref={keenSliderActiveRef}>1</span>
            <span>/</span>
            <span ref={keenSliderCountRef}>{reviews.length}</span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
