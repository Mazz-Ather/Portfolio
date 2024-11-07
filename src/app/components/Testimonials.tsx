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
    
    const timeoutId = setTimeout(initializeSlider, 100) // Delay of 100 ms

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
    // New reviews
    
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
    <section className="bg-black xl:mt-32">
      <div className="mx-auto max-w-screen px-11 py-2 sm:px-6 lg:px-1 lg:py-6">
        <h2 className="text-center text-4xl font-bold tracking-tight hover:underline hover:underline-offset-8 text-gray-100 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 ">
          <div ref={keenSliderRef} className="keen-slider overflow-hidden ">
            {reviews.map((review, i) => (
              <div key={i} className="keen-slider__slide opacity-40 transition-opacity duration-800 ">
                <blockquote className="rounded-lg bg-gray-900 px-11 py-9 shadow-sm sm:p-8 ">
                  <div className="flex items-center gap-4 ">
                    <Image
                      alt={review.name}
                      src={review.image}
                      width={50}
  height={30}
  layout="5rem"
  quality={100}
    className="rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center w-[170vw] gap-0.5 text-green-500">
                        {/* SVG star icons here */}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-100">{review.name}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-100">{review.text}</p>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-3 xl:z-10 text-white font-semibold -z-10">
            <button 
              onClick={goToPrevious} 
              id="keen-slider-previous" 
              disabled={!sliderInstance}
              className=''
            >
              Previous
            </button>
            <span ref={keenSliderActiveRef} id="keen-slider-active">1</span> / <span ref={keenSliderCountRef} id="keen-slider-count">5</span>
            <button 
              onClick={goToNext} 
              id="keen-slider-next" 
              disabled={!sliderInstance}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
