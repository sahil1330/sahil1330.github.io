import React from 'react'
import './Navbar.css'
// bg-rgb-18-18-62
const Navbar = () => {
    return (
        <>
            <header className=''>
                <nav className='flex max-lg:flex-col justify-between items-center h-[10vh] px-[10%] sticky z-10'>
                    <div className="left text-[#10B4D6] text-[1.5rem] font-bold">Sahil's Portfolio</div>
                    <div className="right text-[#fff]">
                        <ul className='flex max-lg:flex-col justify-center'>
                            <li><a href="/">Home</a></li>
                            <li><a href="#AboutSection">About me</a></li>
                            <li><a href="#ProjectsSection">Projects</a></li>
                            <li><a href="#ContactMeSection">Contact Me</a></li>
                            <li><a href="https://drive.google.com/file/d/1BrW_nPTeH0S3CC04BHk03D3SZbqyddyD/view?usp=sharing" target="_blank">My Resume</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
