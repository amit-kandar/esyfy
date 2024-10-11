import React from 'react'
import { HERO__ILLUSTRATION_WIDGET_1, HERO__ILLUSTRATION_WIDGET_2, HERO_ILLUSTRATION_DESKTOP, HERO_ILLUSTRATION_MOBILE } from '../utils/constants'

const Home = () => {
  return (
    <section className='relative pt-8 md:pt-12 pb-0 bg-[#ede6dd]'>
      <div className='max-w-7xl mx-auto relative px-4'>
        <div className='grid lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:text-left gap-y-6 z-10 relative text-left md:text-center lg:h-[720px]'>
          <div className='flex flex-col justify-center md:py-10 relative z-10 mx-auto sm:px-15 lg:pl-0 lg:pr-15'>
            <div>
              <h1 className="md:whitespace-pre-wrap md:text-balance text-5xl font-semibold font-serif lg:text-4xl opacity-85">The comprehensive support system for loss</h1>
            </div>
            <div className="">
              <h4 className="text-lg font-medium mt-4 whitespace-pre-wrap md:mt-6 opacity-80">Helping families through life's most challenging moments.</h4>
            </div>
            <div className="">
              <div className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-center lg:justify-start">
                <button id="try_for_free" type="button" className="text-lg font-medium min-w-36 inline-flex cursor-pointer items-center justify-center text-center select-none whitespace-nowrap ring-2 ring-inset h-11 rounded-full px-8 w-full sm:w-auto text-white bg-black hover:opacity-75">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
          <div className="relative lg:absolute flex flex-col inset-0 mt-10 lg:mt-0 z-0">
            <div className="hidden lg:block absolute bottom-14 right-0 max-h-[400px] lg:max-h-screen">
              <img alt="Man holding envelope on top of mobile phone" fetchpriority="high" width="695.5" height="691" decoding="async" data-nimg="1" style={{ color: "transparent" }} srcSet={HERO_ILLUSTRATION_DESKTOP} />
              <div className="absolute" style={{ bottom: "310px", left: "105px", opacity: 1, transform: "none" }} >
                <img alt="A UI widget with asks, What can we help you with? and the options are The Funeral, Applying for Benefits, and Identity Theft" loading="lazy" width="326.5" height="103.5" decoding="async" data-nimg="1" className="relative scale-75 -left-30 top-30 lg:scale-100 lg:left-0 lg:top-0" style={{ color: "transparent" }} srcSet={HERO__ILLUSTRATION_WIDGET_1} />
              </div>
              <div className="absolute" style={{ bottom: "196px", left: "158px", opacity: 1, transform: "none" }}>
                <img alt="A UI widget with a chat message from Grace, a care manager that says - I'll walk you through it step by step" loading="lazy" width="390.5" height="103.5" decoding="async" data-nimg="1" className="relative scale-100 -left-0 top-10 lg:scale-100 lg:left-0 lg:top-0" style={{ color: "transparent" }} srcSet={HERO__ILLUSTRATION_WIDGET_2} />
              </div>
            </div>
            <img alt="Man holding envelope on top of mobile phone with widgets showing value of app" fetchpriority="high" width="1200" height="858" decoding="async" data-nimg="1" className="lg:hidden flex-1 self-center" style={{ color: "transparent" }} srcSet={HERO_ILLUSTRATION_MOBILE} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home