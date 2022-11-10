import React from 'react'

function TestimonialItem({avatarUrl, headline, text, name, job, variants}) {
  return (
    <div className={`p-20 m-3.75 flex flex-col ${variants}`}>
        <img src={avatarUrl} alt="" className={`w-20 h-20 object-contain border-[3px] border-white rounded-[32%] mix-blend-luminosity saturate-0 mb-6`} />
        <div className="text-xl font-semibold text-choco.50 mb-3">{headline}</div>
        <div className="text-lg text-light leading-[1.6em] mb-3.75">{text}</div>
        <div className="text-xs font-geoma text-light font-bold w-full">{name}</div>
        <div className="text-xs font-geoma text-light opacity-70 mt-[5px] w-full">{job}</div>
    </div>
  )
}

export default TestimonialItem