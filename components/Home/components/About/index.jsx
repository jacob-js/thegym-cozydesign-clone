import React from 'react'
import Button from '../../../ui/Button'

function About() {
  return (
    <div className='bg-about bg-ab'>
        <div className="content-wrapper py-20 sm:py-55 px-6 flex flex-col lg:flex-row justify-center">
            <div className="pl-[5vw] sm:pl-[10vw] xl:max-w-[800px] flex flex-col">
                <div className="text-7.5 tracking-[2px] mb-4">🌴🐻🇺🇸</div>
                <div className="font-semibold text-17.5 mt-10">Get Cozy</div>
                <div className="text-choco text-9.25 leading-13.5 mt-2.5">Design & digital marketing <br /> in San Diego, California</div>
                <div className="text-5.5 space-y-3.75 mt-10 mb-9 leading-[1.6em] tracking-[1px] pr-7.5">
                    <p>
                        We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯
                    </p>
                    <p>
                        No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.
                    </p>
                </div>
                <Button>WHY WE DO WHAT WE DO</Button>
            </div>
            <div className="w-full sm:w-5/6 lg:w-max flex flex-col lg:flex-row items-center sm:grid grid-cols-2 lg:flex gap-4 lg:gap-0 sm:pl-[10vw] lg:pl-0 mt-25 lg:mt-0">
                <div className="w-max flex flex-col items-center gap-10 px-5">
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021.webp" loading="lazy" className='max-w-[150px] object-contain' srcSet="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021-p-500.webp 500w, https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021.webp 930w" alt=""  />
                    <img className='w-40 object-contain' src="//res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_san-diego_user-experience_2020_transparent.svg" alt="Best UX Designers in San Diego" />
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6036c8b7748af86c183f3830_SuperbCompanies%20Leader%20Award%202021%20Digital%20Marketing.webp" alt="" className='w-35' />
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618ad12798295b3339e8074b_Best-Web-Design-Companies-Badge-2-300x300.webp" alt="" className='w-35' />
                </div>
                <div className="w-max flex flex-col gap-10 items-center px-5">
                    <div className="text-center">
                        <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg" alt="" className="w-35" />
                        <div className="text-sm font-bold font-sans text-dark-blue.80 h-[35px] flex items-center justify-center">BBB&nbsp;rating:&nbsp;A+</div>
                    </div>
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6298fa400120341cd677f5d7_Web-Design-Services-San-Diego-California.webp" alt="" className="w-35" />
                    <img src="https://agencyvista.com/verified-agency-vista-badge.png" className="max-w-30 object-contain" alt="" />
                    <img src="https://upcity-marketplace.s3.amazonaws.com/badge/159/basic_full_color/2e05d2b13e9e2c5f0dc9bb7292a80844.png" alt="" className="w-35" />
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6050fa6b0a1f01353a1cbbcc_50.00-Design-Rush-Accredited-Badge.webp" alt="" className="max-w-[150px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About