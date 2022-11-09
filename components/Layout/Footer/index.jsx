import React from 'react'

function Footer() {
  return (
    <div className='bg-light py-[70px] px-[76px]'>
        <div className="content-wrapper flex flex-col">
            <div className="flex justify-between">
                <div className="flex gap-[71px] items-center">
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8782865afd27755f3cb5bd_Cozy_logo_denim.svg" alt="" className='w-[72px]' />
                    <div className="flex text-choco.dark gap-8 text-xs">
                        <div className="cursor-pointer">About</div>
                        <div className="cursor-pointer">Services</div>
                        <div className="cursor-pointer">Work</div>
                        <div className="cursor-pointer">Blog</div>
                        <div className="cursor-pointer">Contact</div>
                    </div>
                </div>
                <div className="flex gap-10 items-center">
                    <div className="flex gap-2 items-center">
                        <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f862ba8b2efe0fc2b486af2_emoji%402x.webp" alt="" className='w-5 object-contain h-5' />
                        <div className="text-xs text-pink">San Diego Digital Designers</div>
                    </div>
                    <div className="socials flex text-xs text-white gap-[6px]">
                        <div className="socials__container bg-blue-500">
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div className="socials__container bg-blue-700">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="socials__container bg-blue-800">
                            <i class="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="socials__container bg-pink.50">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className="socials__container bg-red-700">
                            <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/603d6382bef83b84cdeb5671_icn_youtube-white.svg" alt="" className="w-3 h-3" />
                        </div>
                        <div className="socials__container bg-dark-blue">
                            <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/633246b3d2509ffd71749f81_clutch.svg" alt="" className="w-3 h-3" />
                        </div>
                        <div className="socials__container bg-dark-blue">
                            <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b807bd69a836145c6f39016_icon%20envelope.svg" alt="" className="w-3 h-3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-b-2 border-choco.50 mt-10 mb-[34px]"></div>
            <div className="flex justify-between items-center">
                <div className="flex gap-10 items-center">
                    <div className="text-center">
                        <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg" alt="" className="w-35" />
                        <div className="text-sm font-bold font-sans text-dark-blue.80 h-[35px] flex items-center justify-center">BBB&nbsp;rating:&nbsp;A+</div>
                    </div>
                    <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/634dd43d0cf9ec7420324d59_bod-new_shield-logo-member-p-500.png" alt="" className="w-35 object-contain" />
                    <img src="/icons/clutch.png" alt="" className='max-w-[213px] object-contain' />
                </div>
                <div className="flex text-xs gap-14">
                    <div className="text-dark-blue">Made with love in beautiful, sunny San Diego. ©2021</div>
                    <div className="flex text-choco.dark gap-5 text-xs">
                        <div className="cursor-pointer">Privacy</div>
                        <div className="cursor-pointer">Photo credit</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer