import React from 'react'

function Button({children, full, noise}) {
    const witdh = full ? 'w-full': 'w-max';
    const noiseBg = noise ? 'bg-trans bg-12.5 bg-clip-padding text-fill-inherit': '';

  return (
    <button className={`bg-choco.dark rounded-2.5 px-10 py-7.5 font-bold text-xl font-geoma text-light ${witdh} ${noiseBg} hover:bg-choco transition-all duration-500`}>{children}</button>
  )
}

export default Button