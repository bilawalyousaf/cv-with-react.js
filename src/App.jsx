import { useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
        <div className="cv-wrapper">
           
            <aside className="sidebar">
                <div className="profile">
                    <h2>Bilawal Yousaf Khan</h2>
                    <p className="title">Full Stack Developer</p>
                </div>

               <div className="contact-info">
    <h3>Contact</h3>
    <ul>
        <li>
            <i className="fas fa-phone"></i> 
            <a href="tel:+923141255005">+92 314 1255005</a>
        </li>
        <li>
            <i className="fas fa-envelope"></i> 
            <a href="mailto:bilawalkhan57777@gmail.com">bilawalkhan57777@gmail.com</a>
        </li>
        <li>
            <i className="fab fa-linkedin"></i> 
            <a href="https://linkedin.com/in/bilawal-yousaf-206a40385" target="_blank" rel="noopener noreferrer">
                linkedin.com/bilawalyousaf
            </a>
        </li>
        <li>
            <i className="fab fa-github"></i> 
            <a href="https://github.com/bilawalyousaf" target="_blank" rel="noopener noreferrer">
                github.com/bilawalyousaf
            </a>
        </li>
        <li>
            <i className="fas fa-map-marker-alt"></i> 
            Karachi, Pakistan
        </li>
    </ul>
</div>

                <div className="skills">
                    <h3>Technical Skills</h3>
                    <div className="skill-item">
                        <span>React.js</span>
                        <div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div>
                    </div>
                    <div className="skill-item">
                        <span>Node.js</span>
                        <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
                    </div>
                    <div className="skill-item">
                        <span>Python</span>
                        <div className="progress-bar"><div className="progress" style={{width: '80%'}}></div></div>
                    </div>
                    <div className="skill-item">
                        <span>HTML/CSS</span>
                        <div className="progress-bar"><div className="progress" style={{width: '95%'}}></div></div>
                    </div>
                    <div className="skill-item">
                        <span>MongoDB</span>
                        <div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div>
                    </div>
                </div>

                <div className="languages">
                    <h3>Languages</h3>
                    <ul>
                        <li>English <span>(Fluent)</span></li>
                        <li>Urdu <span>(Native)</span></li>
                    </ul>
                </div>
            </aside>

            <main className="main-content">
                <section className="about">
                    <h3><i className="fas fa-user"></i> About Me</h3>
                    <p>Passionate Full Stack building scalable web applications. Expertise in React, Node.js, and modern JavaScript frameworks. Strong problem-solving skills and commitment to writing clean, maintainable code.</p>
                </section>

                <section className="experience">
                    <h3><i className="fas fa-briefcase"></i> Work Experience</h3>
                    
                    <div className="timeline-item">
                        <div className="timeline-header">
                            <h4>Senior Full Stack Developer</h4>
                            <span className="date">2022 - Present</span>
                        </div>
                        <p className="company">Tech Solutions Inc., Karachi</p>
                        <ul>
                            <li>Lead development of 3 major React applications serving 100k+ users</li>
                            <li>Optimized database queries reducing load time by 40%</li>
                            <li>Mentored 5 junior developers and conducted code reviews</li>
                        </ul>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-header">
                            <h4>Frontend Developer</h4>
                            <span className="date">2019 - 2022</span>
                        </div>
                        <p className="company">Digital Creations, Lahore</p>
                        <ul>
                            <li>Built responsive web applications using React and Redux</li>
                            <li>Collaborated with designers to implement pixel-perfect UIs</li>
                            <li>Improved website performance by 35% through code splitting</li>
                        </ul>
                    </div>
                </section>

                <section className="education">
                    <h3><i className="fas fa-graduation-cap"></i> Education</h3>
                    
                    <div className="timeline-item">
                        <div className="timeline-header">
                            <h4>MS Computer Science</h4>
                            <span className="date">2017 - 2019</span>
                        </div>
                        <p className="company">NED University, Karachi</p>
                        <p>CGPA: 3.8/4.0</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-header">
                            <h4>BS Computer Science</h4>
                            <span className="date">2013 - 2017</span>
                        </div>
                        <p className="company">University of Karachi</p>
                        <p>CGPA: 3.6/4.0</p>
                    </div>
                </section>

                <section className="projects">
                    <h3><i className="fas fa-code"></i> Featured Projects</h3>
                    
                    <div className="project-grid">
                        <div className="project-card">
                            <h4>E-Commerce Platform</h4>
                            <p>Full-stack MERN application with payment integration and admin dashboard</p>
                            <div className="tech-tags">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                        
                        <div className="project-card">
                            <h4>Task Management App</h4>
                            <p>Real-time collaboration tool with drag-drop interface and notifications</p>
                            <div className="tech-tags">
                                <span>Next.js</span>
                                <span>Socket.io</span>
                                <span>PostgreSQL</span>
                            </div>
                        </div>
                        
                        <div className="project-card">
                            <h4>Portfolio Website</h4>
                            <p>Responsive personal portfolio with animations and dark mode</p>
                            <div className="tech-tags">
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>JavaScript</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
    </>
  )
}

export default App