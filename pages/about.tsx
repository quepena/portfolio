import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='section'>
            <div className='about'>
                <div className='label'>WHO AM I?</div>
                <div className='about-contents'>
                    <div className='about-element'>
                        I am a Full-Stack developer who enjoys building both beautiful and practical web applications.
                    </div>
                    <div className='about-element'>
                        I am currently a Senior Computer Science student working on my diploma project.
                    </div>
                    <div className='about-element'>
                        Well-organised, self-disciplined with good time-management skills, I get inspired by opportunities for growth and just simply love learning new skills and getting better every day.
                    </div>
                    <div className='about-element'>
                        I am open to job opportunities so feel free to <Link href="/contact"><b>contact me</b></Link> or connect with me on <a href="https://www.linkedin.com/in/beata-savchenko-579501230" target="_blank"><b>LinkedIn</b></a>.
                    </div>
                    <div className='about-element'>
                        <b>Looking forward to working with you!</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About