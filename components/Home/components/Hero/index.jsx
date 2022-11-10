import React from 'react'
import Button from '../../../ui/Button'

function Hero() {
  return (
    <div className='bg-hero xl:h-[1024px] h-[1300px] sm:h-[1500px] lg:h-240 font-fauc overflow-y-hidden' >
        <div className="content-wrapper w-5/6 lg:w-full lg:px-6 mt-48 lg:mt-0 lg:flex justify-between items-center">
            <div className="w-full flex flex-col gap-5 sm:pr-15 justify-center">
                <div className="text-choco.50 font-black text-[3.75rem] sm:text-[5rem] lg:text-22.5 leading-[1.1em] bg-trans bg-clip-text bg-choco.50 text-fill-transparent bg-12.5 py-2.5">Your design team for the cost of a salary.</div>
                <div className="font-semibold opacity-80 text-[30px] sm:text-[39px] lg:text-4xl.3 text-light bg-trans bg-light bg-clip-text text-fill-transparent leading-[1.3em] py-2.5 mb-7.5 tracking-[0.4px]">
                Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don&#39;t?
                </div>
                <Button noise>SEE HOW WE WORK & WHAT WE CAN DO</Button>
            </div>
            <div className="w-full lg:-mr-10">
                <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy-p-800.png" alt="" sizes='(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 79vw, (max-width: 1279px) 63vw, 58vw' className='mt-20 lg:mt-55 lg:max-w-12/10' />
            </div>
        </div>
    </div>
  )
}

export default Hero