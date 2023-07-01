import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
    return (
        <div className='section'>
            <div className='home'>
                <div className='home-contents'>
                    <div className='header'>Hi. I am Beata Savchenko.</div>
                    <div className='header-fs'>A Full-Stack Developer.</div>
                    <div className='socials'>
                        <Link href="/contact"><button className='contact-btn'>Contact me</button></Link>
                        <div className='element'>
                            <div className='element-link'>
                                <a href="https://www.linkedin.com/in/beata-savchenko-579501230" target="_blank"  rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            <div className='element-link'>
                                <a href="https://github.com/quepena" target="_blank"  rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            <div className='element-link'>
                                <a id='cv' href='Beata_Savchenko_CV_Full-Stack.pdf' download="Beata_Savchenko_CV_Full-Stack">CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero