import React from 'react';
import './style/Projects.css';

const Projects = () => {
    return (
        <div>
            <div className='projects'>
                <h1>Projects</h1>
                <h3>These are my projects so far</h3>
                <nav className='links'>
                    <a href="https://monica-vo.github.io/keycodefinder/" target="_blank" rel="noopener noreferrer"><h4>KeyCode</h4></a>
                    <a href="https://monica-vo.github.io/dicegame/" target="_blank" rel="noopener noreferrer"><h4>Dice game</h4></a>
                    <a href="https://monica-vo.github.io/zengardenproject/" target="_blank" rel="noopener noreferrer"><h4>Zen Garden</h4></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><h4>Cash Machine</h4></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><h4>Cyber Pet</h4></a>
                </nav>
            </div>
        </div>
    );
}

export default Projects;