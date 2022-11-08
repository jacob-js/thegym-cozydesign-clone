import React from 'react'

function Navbar() {
    const items = ['Get Cozy', 'What we do', 'Our work', 'The blog', 'Say hi']
  return (
    <div className='bg-nav fixed w-full'>
        <div className="flex justify-between items-center ml-10 mr-6">
            <div className="py-5 px-4">
                <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f86150178cfb414cd74bce4_Cozy_logo_canvas.svg" alt="" className='w-25' />
            </div>
            <div className="flex text-choco.10 font-fauc text-2xl.1 font-semibold">
                {
                    items.map((item, index) =>(
                        <div className="px-4 py-7 hover:text-choco.50 hover:-translate-y-1 cursor-pointer transition-all duration-500" key={index}>{item}</div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar