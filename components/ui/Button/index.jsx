import React from 'react'

function Button({children, full, noise}) {
    const witdh = full ? 'w-full': 'w-fit';
    const noiseBg = noise ? 'bg-trans bg-12.5 bg-clip-padding text-fill-inherit': '';

  return (
    <button className={`bg-choco.dark rounded-2.5 px-10 py-5 sm:py-7.5 font-bold text-lg sm:text-xl font-geoma text-light ${witdh} ${noiseBg} hover:bg-choco transition-all duration-500 leading-[1.1em] tracking-[2px]`}>{children}</button>
  )
}

export default Button