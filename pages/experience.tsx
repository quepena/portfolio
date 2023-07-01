import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Experience = () => {
    return (
        <div className='section'>
            <div className='experience'>
                <div className='label'>EXPERIENCE</div>
                <div className='warning'>
                    <span className='fa-exclamation'>
                        <FontAwesomeIcon
                            icon={faCircleExclamation}
                            className="element-icon"
                        />
                    </span>
                    Websites presented on this page are deployed via Railway&apos;s free tier. Therefore websites might not work or load some data since free resources end every month, and I have to redeploy projects manually. So, please, <b>check out available videos</b> if you see that websites are not loading. Thanks for your time!
                </div>

                <div className='experience-contents'>

                    {/* ---------- Portfolio ---------- */}
                    <div className='project'>
                        <div className='project-links'>
                            <div className='element-link'>
                                <a href="https://github.com/quepena/portfolio" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            {/*---------------------*/}
                            <div className='element-link'>
                                <a href="https://beata-savchenko.netlify.app/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='project-name'>Portolio</div>
                        <div className='project-desc'>This very website.</div>
                        <div className='tech'>
                            <div className='tech-el'>#TypeScript</div>
                            <div className='tech-el'>#React</div>
                            <div className='tech-el'>#Next.js</div>
                            <div className='tech-el'>#Node.js</div>
                        </div>
                    </div>

                    {/* ---------- TVShowRater ---------- */}
                    <div className='project'>
                        <div className='project-links'>
                            <div className='element-link'>
                                <a href="https://github.com/quepena/TVShowRater" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            {/*---------------------*/}
                            {/* <div className='element-link'>
                                <a href="https://recipe-book-app-react.netlify.app/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="element-icon"
                                    />
                                </a>
                            </div> */}
                            {/*---------------------*/}
                            {/* <div className='element-link'>
                                <a href="https://drive.google.com/file/d/1cTJ1Cz0XD4KS8xSrl--H3Hg5qj9C7Sob/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="element-icon"
                                    />
                                </a>
                            </div> */}
                        </div>
                        <div className='project-name'>TVShowRater</div>
                        <div className='project-desc'>Web application of a TV Shows`&apos;` Rater App</div>
                        <div className='tech'>
                            <div className='tech-el'>#TypeScript</div>
                            <div className='tech-el'>#React</div>
                            <div className='tech-el'>#Next.js</div>
                            <div className='tech-el'>#Tailwind CSS</div>
                            <div className='tech-el'>#Redux Toolkit</div>
                            <div className='tech-el'>#Node.js</div>
                            <div className='tech-el'>#NestJS</div>
                            <div className='tech-el'>#PostgreSQL</div>
                        </div>
                    </div>

                    {/* ---------- RecipeApp ---------- */}
                    <div className='project'>
                        <div className='project-links'>
                            <div className='element-link'>
                                <a href="https://github.com/quepena/RecipeApp" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            {/*---------------------*/}
                            <div className='element-link'>
                                <a href="https://recipe-book-app-react.netlify.app/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            {/*---------------------*/}
                            <div className='element-link'>
                                <a href="https://drive.google.com/file/d/1cTJ1Cz0XD4KS8xSrl--H3Hg5qj9C7Sob/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='project-name'>RecipeApp</div>
                        <div className='project-desc'>Web and Mobile Applications of a recipe book.</div>
                        <div className='tech'>
                            <div className='tech-el'>#JavaScript</div>
                            <div className='tech-el'>#React</div>
                            <div className='tech-el'>#React Native</div>
                            <div className='tech-el'>#Node.js</div>
                            <div className='tech-el'>#Express</div>
                            <div className='tech-el'>#SQL</div>
                            <div className='tech-el'>#PostgreSQL</div>
                        </div>
                    </div>

                    {/* ---------- Polylingua ---------- */}
                    <div className='project'>
                        <div className='project-links'>
                            <div className='element-link'>
                                <div className='link-el'>
                                    <a href="https://github.com/quepena/Polylingua" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="element-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                            {/*---------------------*/}
                            <div className='element-link'>
                                <div className='link-el'>
                                    <a href="https://polylingua-app.netlify.app/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon
                                            icon={faGlobe}
                                            className="element-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                            {/*---------------------*/}
                            <div className='element-link'>
                                <div className='link-el'>
                                    <a href="https://drive.google.com/file/d/1Whraqq8DcUaNL3wHCwab59VxqOyy9LZW/view?usp=sharing" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon
                                            icon={faYoutube}
                                            className="element-icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='project-name'>Polylingua</div>
                        <div className='project-desc'>App for language learning.</div>
                        <div className='tech'>
                            <div className='tech-el'>#JavaScript</div>
                            <div className='tech-el'>#React</div>
                            <div className='tech-el'>#Redux</div>
                            <div className='tech-el'>#Bootstrap</div>
                            <div className='tech-el'>#Node.js</div>
                            <div className='tech-el'>#Express</div>
                            <div className='tech-el'>#NoSQL</div>
                            <div className='tech-el'>#MongoDB</div>
                        </div>
                    </div>

                    {/* ---------- ChineseDictionary ---------- */}
                    <div className='project'>
                        <div className='project-links'>
                            <div className='element-link'>
                                <a href="https://github.com/quepena/ChineseDictionary" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            <div className='element-link'>
                                <a href="https://drive.google.com/file/d/1Czp8r5G89JfXmluTHTnN-bDvqiZC945Z" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='project-name'>ChineseDictionary</div>
                        <div className='project-desc'>Mobile application of a dictionary of Chinese language.</div>
                        <div className='tech'>
                            <div className='tech-el'>#Kotlin</div>
                            <div className='tech-el'>#JavaScript</div>
                            <div className='tech-el'>#Node.js</div>
                            <div className='tech-el'>#Express</div>
                            <div className='tech-el'>#NoSQL</div>
                            <div className='tech-el'>#MongoDB</div>
                        </div>
                    </div>

                    {/* ---------- Social Media App ---------- */}
                    <div className='project'>
                        <div className='project-links'>
                            <div className='element-link'>
                                <a href="https://github.com/quepena/Social-App" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            {/*---------------------*/}
                            <div className='element-link'>
                                <a href="https://social-media-app-react.up.railway.app" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                            {/*---------------------*/}
                            <div className='element-link'>
                                <a href="https://drive.google.com/file/d/1_QSX7dQlTr6ZymyN2vYXPflHZp4YQNaJ/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='project-name'>Social Media App</div>
                        <div className='project-desc'>MERN social media application.</div>
                        <div className='tech'>
                            <div className='tech-el'>#JavaScript</div>
                            <div className='tech-el'>#React</div>
                            <div className='tech-el'>#Redux</div>
                            <div className='tech-el'>#Bootstrap</div>
                            <div className='tech-el'>#Node.js</div>
                            <div className='tech-el'>#Express</div>
                            <div className='tech-el'>#NoSQL</div>
                            <div className='tech-el'>#MongoDB</div>
                        </div>
                    </div>

                    {/* ---------- E-Commerce App ---------- */}
                    {/* <div className='project'>
                        <div className='project-links'>
                            <div className='element-link'>
                                <a href="https://github.com/quepena/Shop" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="element-icon"
                                    />
                                </a>
                            </div> */}
                            {/*---------------------*/}
                            {/* <div className='element-link'>
                                <a href="https://drive.google.com/file/d/1exPevFIH39jfoqj6FIX_lyjNYmP5WsFp/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className="element-icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='project-name'>Shop</div>
                        <div className='project-desc'>E-Commerce Web application.</div>
                        <div className='tech'>
                            <div className='tech-el'>#JavaScript</div>
                            <div className='tech-el'>#Angular</div>
                            <div className='tech-el'>#C#</div>
                            <div className='tech-el'>#.NET_Core</div>
                            <div className='tech-el'>#SQL</div>
                            <div className='tech-el'>#SQLite</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Experience