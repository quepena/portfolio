import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='section'>
            <div className='home'>
                <div className='home-contents'>
                    <div className='header'>Hi. I am Beata Savchenko.</div>
                    <div className='header-fs'>The Full-Stack Developer.</div>
                    <div className='socials'>
                        <Link href="/contact"><button className='contact-btn'>Contact me</button></Link>
                        <div className='element'>
                            <a href="https://www.linkedin.com/in/beata-savchenko-579501230" target="_blank"><img src="linkedin.png" alt="" /></a>
                            <a href="https://github.com/quepena" target="_blank"><img src="github.png" alt="" /></a>
                            <a href='CV_Beata_Savchenko_Full-Stack.pdf' download="CV_Beata_Savchenko_Full-Stack">GET CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero