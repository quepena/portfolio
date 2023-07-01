import React from 'react'

const Skills = () => {
    return (
        <div className='section'>
            <div id="skills" className='skills'>
                <div className='label'>SKILLS</div>
                <div className='skills-contents'>
                    <div className='column'>
                        <div className='skill-section'>Front-End</div>
                        <div className='elements'>
                            <div className='element'>
                                <img src="html.png" alt="" />
                                <div className='skill-name'>HTML</div>
                            </div>
                            <div className='element'>
                                <img src="css.png" alt="" />
                                <div className='skill-name'>CSS</div>
                            </div>
                            <div className='element'>
                                <img src="js.png" alt="" />
                                <div className='skill-name'>JavaScript</div>
                            </div>
                            <div className='element'>
                                <img src="ts.png" alt="" />
                                <div className='skill-name'>TypeScript</div>
                            </div>
                            <div className='element'>
                                <img src="react.png" alt="" />
                                <div className='skill-name'>React.js</div>
                            </div>
                            <div className='element'>
                                <img src="next.png" alt="" />
                                <div className='skill-name'>Next.js</div>
                            </div>
                            <div className='element'>
                                <img src="redux.png" alt="" />
                                <div className='skill-name'>Redux</div>
                            </div>
                            <div className='element'>
                                <img src="bootstrap.png" style={{width: 80, height: "auto"}} alt="" />
                                <div className='skill-name'>Bootstrap</div>
                            </div>
                            <div className='element'>
                                <img src="tailwind.png" style={{width: 100, height: "auto"}} alt="" />
                                <div className='skill-name'>Tailwind CSS</div>
                            </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='skill-section'>Back-End</div>
                        <div className='elements'>
                            <div className='element'>
                                <img src="node.png" alt="" />
                                <div className='skill-name'>Node.js</div>
                            </div>
                            <div className='element'>
                                <img src="express.png" alt="" />
                                <div className='skill-name'>Express.js</div>
                            </div>
                            <div className='element'>
                                <img src="nest.svg" alt="" />
                                <div className='skill-name'>NestJS</div>
                            </div>
                            <div className='element'>
                                <img src="postgres.png" alt="" />
                                <div className='skill-name'>PostgreSQL</div>
                            </div>
                            <div className='element'>
                                <img src="mongodb.png" alt="" />
                                <div className='skill-name'>MongoDB</div>
                            </div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='skill-section'>Other skills</div>
                        <div className='elements'>
                            <div className='element'>
                                <img src="vscode.png" alt="" />
                                <div className='skill-name'>Visual Studio Code</div>
                            </div>
                            <div className='element'>
                                <img src="postman.png" alt="" />
                                <div className='skill-name'>Postman</div>
                            </div>
                            <div className='element'>
                                <img src="git.png" alt="" />
                                <div className='skill-name'>Git</div>
                            </div>
                            <div className='element'>
                                <img src="linux.png" alt="" />
                                <div className='skill-name'>Linux</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills