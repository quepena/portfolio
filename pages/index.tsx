export default function Home() {

  return (
    <div className='page'>
      <div className='menu'>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contacts">Contacts</a>
      </div>

      <div className="container">
        <div className='section'>
          <div id="home" className='home'>
            <div className='home-contents'>
              <div className='header'>Hi. I am Beata.</div>
              <div className='header'>The Full-Stack Developer.</div>
              <button className='contact-btn'>Contact me</button>
            </div>
          </div>
        </div>

        <div className='section'>
          <div id="skills" className='skills'>
            <div>SKILLS</div>
            <div className='skills-contents'>
              <div className='header'>Front-End</div>
              <div className='header'>The Full-Stack Developer.</div>
              <button className='contact-btn'>Contact me</button>
            </div>
          </div>
        </div>

        <div className='section'>
          <div id="experience" className='experience'>
            <div>EXPERIENCE</div>
            <div className='skills-contents'>
              <div className='header'>Front-End</div>
              <div className='header'>The Full-Stack Developer.</div>
              <button className='contact-btn'>Contact me</button>
            </div>
          </div>
        </div>

        <div className='section'>
          <div id="about" className='about'>
            <div>ABOUT</div>
            <div className='skills-contents'>
              <div className='header'>Front-End</div>
              <div className='header'>The Full-Stack Developer.</div>
              <button className='contact-btn'>Contact me</button>
            </div>
          </div>
        </div>

        <div className='section'>
          <div id="contacts" className='contacts'>
            <div>CONTACTS</div>
            <div className='skills-contents'>
              <div className='header'>Front-End</div>
              <div className='header'>The Full-Stack Developer.</div>
              <button className='contact-btn'>Contact me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
