import React, { useState, useEffect } from 'react';
import './Projects.css';
import cherry from '/src/assets/cherrylibrary.png';
import ricas from '/src/assets/ricasdecals.png';
import budgetmanager from '/src/assets/budgetmanagerplot.png';
import tripcostcalculator from '/src/assets/tripcostcalculator.png';
import tictactoe from '/src/assets/tictactoe.png';
import orange from '/src/assets/orangeforum.png';
import luovacraft from '/src/assets/luovacrafttemplate.jpg';
import portfolio from '/src/assets/portfolio.png';

const Modal = ({ isOpen, onClose, project }) => {
    const [isImageZoomed, setImageZoomed] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const toggleImageZoom = () => {
        setImageZoomed(!isImageZoomed);
    };

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <span className="close-button" onClick={onClose}>&times;</span>
                    <h2>{project.title}</h2>
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className={`modal-image ${isImageZoomed ? 'zoomed' : ''}`}
                        onClick={toggleImageZoom}
                    />
                    <p className="description-text">{project.fullDescription}</p>
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link">View on GitHub</a>
                    )}
                    {project.websiteURL && (
                        <a href={project.websiteURL} target="_blank" rel="noopener noreferrer" className="modal-link">View Website</a>
                    )}
                </div>
            </div>
            {isImageZoomed && (
                <div className="image-zoom-overlay" onClick={toggleImageZoom}>
                    <img src={project.imageUrl} alt={project.title} className="zoomed-image" />
                </div>
            )}
        </>
    );
};

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTechnology, setSelectedTechnology] = useState('All');

    const projects = [
        {
            title: "Own Portfolio",
            description: 'This portfolio website was developed to showcase my skills and projects as a web developer. It features a clean and responsive design with smooth animations and interactive elements.',
            fullDescription: "This portfolio website was developed to showcase my skills and projects as a web developer. It features a clean and responsive design with smooth animations and interactive elements. Built with React, CSS, and HTML, the site provides an engaging user experience that highlights my work and expertise. The website includes sections for my projects, about section, and contact information, allowing visitors to explore my portfolio and get in touch. The project demonstrates my proficiency in front-end development, including layout design, state management, and component-based architecture. It also showcases my creativity and attention to detail in crafting visually appealing and user-friendly web experiences.",
            imageUrl: portfolio,
            githubUrl: 'https://github.com/micsno/micsno.github.io',
            technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'HTML5'],
        },
        {
            title: "Rica's Decals",
            description: 'This portfolio website was developed to display a curated collection of custom-made knives, stickers, and textile prints.',
            fullDescription: "This portfolio website was developed to display a curated collection of custom-made knives, stickers, and textile prints. Built with HTML, CSS, and JavaScript, the site features a clean and responsive design that showcases each product with high-quality images and detailed descriptions. The website is crafted to highlight the artist’s unique creations, with a focus on visual appeal and usability. It ensures a seamless experience across different devices, from desktops to smartphones. Interactive elements implemented with JavaScript enhance user interaction, such as smooth scrolling and dynamic content updates. Each product is presented with its own dedicated section, including images and descriptions that reflect the craftsmanship and creativity behind the items. The portfolio demonstrates not only the artist's craftsmanship but also my skills in web development, including layout design, user interface optimization, and interactive features.",
            imageUrl: ricas,
            websiteURL: 'https://www.ricas.fi',
            technologies: ['HTML5', 'CSS', 'JavaScript'],
        },
        {
            title: 'Cherry Library',
            description: 'Cherry Library is a project developed as part of the Buutti Education web development course in 2024.',
            fullDescription: 'Cherry Library is a project developed as part of the Buutti Education web development course in 2024. The project leverages React and Vite to build a modern and efficient web application. The application allows users to browse a collection of books, view details about each book, and add new books to the library. The project also includes a search feature to filter books by title, author, or genre.',
            imageUrl: cherry,
            githubUrl: 'https://github.com/micsno/KirsikkaLibrary',
            technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'HTML5'],
        },
        {
            title: 'Budget Manager',
            description: 'This code that calculates the cost of a trip based on the distance traveled, fuel efficiency of the vehicle, and the current price of fuel in Euros. ',
            fullDescription: 'Budget Manager is a Python script designed to help users manage their finances by allowing them to add income and expense entries, view summaries, and save or load data from a file (budget.json). Key features include adding entries with details such as amount, category, and date; viewing total income, expenses, and balance; displaying category-based summaries; saving and loading entries from a JSON file; and plotting a bar chart of expenses and incomes by category using matplotlib. It also provides a simple command-line interface for easy interaction.',
            imageUrl: budgetmanager,
            githubUrl: 'https://github.com/micsno/BudgetManager',
            technologies: ['Python'],
        },
        {
            title: 'Trip Cost Calculator',
            description: 'The Budget Manager is a Python script designed to help users manage their budget entries.',
            fullDescription: 'TripCostCalculator is a Python script designed to help users estimate the total cost of a road trip. By inputting details such as the distance of the trip, the fuel efficiency of the vehicle, and the price of fuel, the script calculates and displays the total travel cost. This tool provides an easy way to budget for travel expenses based on fuel consumption.',
            imageUrl: tripcostcalculator,
            githubUrl: 'https://github.com/micsno/TripCostCalculator',
            technologies: ['Python'],
        },
        {
            title: 'TicTacToe',
            description: 'This script creates a Tic-Tac-Toe game with a Player vs. AI mode. The AI adapts to different difficulty levels, from random moves to strategic play using the minimax algorithm. It showcases JavaScript skills in game development and AI implementation.',
            fullDescription: 'This script powers a Tic-Tac-Toe game featuring a Player vs. AI mode. It incorporates intelligent AI opponents with adjustable difficulty levels, ranging from random moves to advanced strategies using the minimax algorithm. The game dynamically handles player and AI turns, detects wins or draws, and allows players to restart the game. This project highlights skills in JavaScript, game logic, and AI development.',
            imageUrl: tictactoe,
            githubUrl: 'https://github.com/micsno/tictactoe',
            technologies: ['JavaScript', 'HTML5', 'CSS'],
        },
        {
            title: 'Orange Forum',
            description: 'Orange Forum is a dynamic web application designed for user discussions and community engagement. This project features a comprehensive source code implementation that includes user authentication, post management, and real-time updates. It demonstrates proficiency in modern web technologies and showcases best practices in scalable and maintainable software development.',
            fullDescription: 'Orange Forum is a dynamic web application tailored for user discussions and community engagement. It integrates a comprehensive API for message management, allowing users to post, delete, and modify messages with ease. The API includes endpoints for retrieving all messages (GET /allMessages), fetching a specific message by ID (GET /singleMessage/:id), posting new messages (POST /newMessage with userKey), deleting messages (DELETE /deleteMessage/:id with userKey), and modifying existing messages (PUT /modifyMessage with userKey). This project showcases advanced skills in both front-end and back-end development, emphasizing API integration, user authentication, and real-time content management. Designed with scalability and maintainability in mind, it exemplifies best practices in modern web development.',
            imageUrl: orange,
            githubUrl: 'https://github.com/micsno/orange-forum',
            technologies: ['HTML5', 'CSS', 'JavaScript'],
        },
        {
            title: 'LuovaCraft Template',
            description: 'LuovaCraft is a responsive web template designed for creative portfolios and showcases. This project features a modern and visually appealing design with smooth animations and interactive elements.',
            fullDescription: 'The LuovaCraft Portfolio Template is a versatile and responsive portfolio design created with HTML, CSS, and JavaScript. It features a modern layout to showcase your projects and skills, with a clean structure and customizable styling. The template supports both light and dark modes, allowing users to switch between themes for a personalized viewing experience. The design incorporates interactive JavaScript elements, ensuring a dynamic and engaging user experience across various devices and screen sizes. With its sleek animations and intuitive navigation, LuovaCraft provides an ideal platform to present your work and attract potential clients or employers.',
            imageUrl: luovacraft,
            githubUrl: 'https://github.com/micsno/luovacraft-portfolio-template',
            technologies: ['HTML5', 'CSS', 'JavaScript'],
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    // Function to handle the technology filter
    const handleTechnologyFilter = (tech) => {
        setSelectedTechnology(tech);
    };

    // Filter projects based on selected technology
    const filteredProjects = selectedTechnology === 'All' 
        ? projects 
        : projects.filter(project => project.technologies.includes(selectedTechnology));

    return (
        <section className="projects-container">
            <header className="projects-header">
                <h1>My Projects</h1><br />
                <p>Welcome to my project showcase! Here, you’ll find a curated selection of key projects that highlight various aspects of my skills and expertise. Use the filter below to sort by technology or language to find projects that match your interests. Click on any project to dive into its details and discover the challenges I tackled and the solutions I implemented.</p>
                <div className="technology-filters">
                    <button onClick={() => handleTechnologyFilter('All')}>All</button>
                    <button onClick={() => handleTechnologyFilter('React')}>React</button>
                    <button onClick={() => handleTechnologyFilter('Python')}>Python</button>
                    <button onClick={() => handleTechnologyFilter('JavaScript')}>JavaScript</button>
                    <button onClick={() => handleTechnologyFilter('HTML5')}>HTML5</button>
                    <button onClick={() => handleTechnologyFilter('CSS')}>CSS</button>
                </div>
            </header>
            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <button onClick={() => openModal(project)} className="project-link">Read more</button>
                            <br />{project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                            )}
                            {project.websiteURL && (
                                <a href={project.websiteURL} target="_blank" rel="noopener noreferrer" className="project-link">View Website</a>
                            )}
                            {project.technologies && (
                                <ul className="technologies-list">
                                    {project.technologies.map((tech, i) => (
                                        <li key={i}>• {tech}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedProject && (
                <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
            )}
            <footer className="projects-footer">
                <p>For more projects, visit my <a href="https://github.com/micsno" target="_blank" rel="noopener noreferrer">GitHub profile</a>.</p>
            </footer>
        </section>
    );
}

export default Projects;
