import React from 'react'

function Sdd() {
  return (
    <div className='py-35 px-6 bg-sdd relative'>
        <video src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black%20And%20White%20Video%20Of%20Man%20Infront%20Of%20The%20Computer-transcode.mp4" className="absolute w-full -inset-0 h-full object-cover -z-10" autoPlay={true} loop={true} muted playsInline></video>
        <div className="content-wrapper px-6 sm:px-0">
            <div className="xl:max-w-[940px] mx-auto flex flex-col gap-20 sm:gap-5 lg:gap-0 lg:flex-row justify-center items-center">
                <div className="w-15 sm:w-30 shrink-0">
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg" alt="" className='max-w-full object-contain' />
                </div>
                <div className="flex flex-col lg:pl-25">
                    <h3 className="font-bold text-light text-5xl leading-[1.1em] mb-6"><em>Psst…</em> <br />are you a designer?</h3>
                    <p className="text-light leading-[1.6em] mb-3.75 text-xl max-w-md lg:max-w-full">Consider joining our <a href="https://sddd.org/" className="text-pink font-bold hover:underline">San Diego Design Designers</a> group. More than 700 people, we meet online via Slack and in person at social events around the city. It’s a great opportunity to share ideas, get inspired, find support, and celebrate great design.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sdd