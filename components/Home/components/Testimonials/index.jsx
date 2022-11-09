import React from 'react'
import TestimonialItem from './components/TestimonialItem'

function Testimonials() {
  return (
    <div className='bg-light py-35 px-6 testimonials'>
      <div className="content-wrapper flex flex-col items-center">
        <div className="mb-[67px] flex flex-col items-center">
          <div className="text-6xl font-semibold mt-15 mb-7.5">❤️ from our clients</div>
          <div className="mt-5 mb-6 w-10 h-1 bg-choco.50"></div>
        </div>
        <div className="w-5/6 pb-3.75">
          <div className="flex relative justify-center">
            <div className="absolute w-[88px] h-[88px] mx-auto z-10 bg-light rounded-full border-light border flex items-center justify-center -bottom-[44px] shadow-border-icon">
              <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72df4703e47_chat-icon-black.svg" alt="" />
              <div className="border-2 border-light absolute -inset-2 rounded-full opacity-70"></div>
              <div className="border-2 border-light absolute -inset-4 rounded-full opacity-30"></div>
            </div>
            <div className="w-2/4 flex justify-end items-end">
              <TestimonialItem 
                name="SUSIE POLLASKY"
                headline="“One of the top design professionals…”"
                text="I connect with hundreds of talented folks on a regular basis, and I can say with complete confidence that Lee is one of the best UX designers in Aquent/Vitamin T's global network."
                job={<>Now: Leadership Recruiting @ Product Design <br />at Facebook</>}
                avatarUrl="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp"
                variants="bg-dark-blue rounded-t-[80%] rounded-br-none rounded-bl-[100%] bg-trans bg-12.5 text-fill-inherit pr-10 pl-15 text-right shadow-test-1 items-center"
              />
            </div>
            <div className="pr-[10%] w-2/4">
              <TestimonialItem 
                name="MARTIN SPRITZER"
                headline="“They’re a very well-rounded organization…”"
                text="Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased."
                job="General Manager @ iQuoteXpress"
                avatarUrl="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp"
                variants="bg-dark-blue.80 rounded-t-[80%] rounded-br-[50%] rounded-bl-none bg-trans bg-12.5 text-fill-inherit pr-10 pl-15 text-left shadow-test-2 items-center"
              />
            </div>
          </div>

          <div className="flex">
            <div className="w-2/4 pl-[10%]">
              <TestimonialItem 
                name="ERIC WEISS"
                headline={<span className='text-white'>{"“They're just good people.”"}</span>}
                text="They were a pleasure to work with and I'm really happy with the results. They pretty much nailed it."
                job="Founder @ Full Cycle Product Development"
                avatarUrl="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb7dda4eebc035f1c0beb_1565729526231.webp"
                variants="bg-choco rounded-tl-[100%] rounded-b-[60%] bg-trans bg-12.5 text-fill-inherit px-10 text-right shadow-test-3 items-end"
              />
            </div>
            <div className="w-2/4">
              <TestimonialItem 
                name="MICHAEL WEISFELD"
                headline={<span className='text-white'>{"“The project was successful”"}</span>}
                text="They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional."
                avatarUrl="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb8a427acfd62e2c3148c_Michael%20Weisfeld-p-500.webp"
                variants="bg-choco.dark rounded-tr-[100%] rounded-b-[60%]  bg-trans bg-12.5 text-fill-inherit pr-10 pl-15 text-left shadow-test-4"
                job="Director of Digital Marketing @ National Funding"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials