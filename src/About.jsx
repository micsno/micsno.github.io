import React from 'react';
import '/src/About.css';

function About() {
    return (
        <section className="about-container" role="main">
            <header className="about-header" role="banner">
                <h1>About Me</h1><br />
            </header>
            <div className='about-section'>
                <section className="about-landing-text" role="region" aria-labelledby="about-landing-text">
                    <p>Hello! I’m a <strong>junior Front-End Developer</strong> with a passion for crafting engaging and intuitive web applications and websites. With a solid foundation in <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>, and hands-on experience with frameworks like <strong>React</strong>, I specialize in building responsive and user-friendly interfaces. My goal is to continuously enhance my skills and stay ahead in the ever-evolving world of web development. I’m excited to take on new challenges and contribute to innovative projects.</p>
                </section>
                <hr />
                <section className="about-skills" role="region" aria-labelledby="about-skills"><br />
                    <h2 id="about-skills">Key Skills:</h2>
                    <ul>
                        <li><strong>Front-End Technologies</strong>: Familiar with HTML5, CSS3, and JavaScript</li>
                        <li><strong>Frameworks & Libraries</strong>: Gaining experience with React, including integrating APIs and state management</li>
                        <li><strong>Design & Usability</strong>: Understanding of UI/UX principles and responsive design techniques</li>
                        <li><strong>Tooling & Workflow</strong>: Familiar with modern development tools such as Axios, Babel, and version control systems like Git</li>
                    </ul>
                </section>
                <hr />
                <section className="about-purpose" role="region" aria-labelledby="about-purpose"><br />
                    <h2 id="about-purpose">What Drives Me:</h2>
                    <p><strong>Innovation</strong>: Constantly exploring new technologies and trends to stay at the forefront of front-end development.</p>
                    <p><strong>Creativity</strong>: Passionate about transforming design concepts into functional and visually appealing web experiences.</p>
                    <p><strong>Problem-Solving</strong>: Enjoy tackling complex challenges and finding effective solutions to enhance user interaction.</p>
                </section>
                <hr />
                <section className="about-future-plans" role="region" aria-labelledby="about-future-plans"><br />
                    <h2 id="about-future-plans">Future Plans:</h2>
                    <p><strong>Learning TypeScript and React Native:</strong> I plan to enhance my skills by learning TypeScript to write more robust and maintainable code. Additionally, I am excited to explore React Native for building cross-platform mobile applications.</p>
                    <p><strong>Higher Education:</strong> My goal is to study Information and Communication Technology Engineering at a university of applied sciences to deepen my technical knowledge and expertise.</p>
                    <p><strong>Cybersecurity and Information Security:</strong> In the future, I aspire to work in cybersecurity and information security, focusing on protecting systems and data from potential threats and vulnerabilities.</p>
                    <p><strong>Continuous Learning:</strong> I am committed to staying updated with emerging technologies and industry trends through courses, certifications, and personal projects.</p>
                </section>
            </div>

            <footer role="contentinfo">
                <p>Feel free to explore my portfolio to see some of the projects I’ve worked on. I’m excited to connect with like-minded professionals and discuss how we can collaborate on innovative web solutions!</p>
            </footer>
        </section>
    );
}

export default About;
