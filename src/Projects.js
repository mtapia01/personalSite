import './css/App.css';
import React from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from './footer'
import Navbar from './navbar';

function Projects() {
    return(
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            
            <body className='App-body font'>
                <h3>
                    Here you can find all my recent projects with links to their repos
                </h3>
            <Divider>
                <Chip color='info'  variant="outline" label="2023" />
            </Divider>

            <div id='fitsagram'>
                <h4 >
                Fitsagram
                </h4>
                {/* vid goes here */}
                <p className='padding'>
                    Fitsagram provides users with a dynamic platform for sharing and connecting. 
                    Users can post pictures, follow others to curate a personalized feed from their updates, and engage with content by liking posts or commenting. 
                <br></br> <br></br>
                Software Stack: JavaScript, Python, SQLite, Flask, HTML
                </p>
                <a className='padding' href='https://github.com/mtapia01/cse106Final/tree/michael-dev'>
                    <GitHubIcon fontSize='large' />
                </a>
            </div>

            <div>
                <h4>
                Capstone Project: Bio Secure Scheduler
                </h4>
                <p className='padding'>
                    Developed a Bio Secure Scheduler for Agrecom, a water treatment, sanitation, and pest control company. 
                    Agrecom’s workers are required to follow strict quarantine restrictions when going from one job site to the next. 
                    Consequently, schedules need to be created with these constraints in mind, which is currently a manual and time-consuming process. 
                    Using customer, job, and employee information inputted by a user, an optimal schedule can be generated that follows all of the necessary constraints. 
                    <br></br> <br></br>
                    Software Stack: Python, GoogleOR Tools, Google API, StreamLit, SQLite
                </p>

            </div>
            <div id='stu-enrollment'>
                <h4>
                Student Enrollment Web App

                </h4>
                {/* vid goes here */}
                <p className='padding'>
                The Student Enrollment Web App streamlines student and teacher interactions. 
                Students can easily log in, view classes, explore available courses, and enroll in open classes. 
                Teachers manage classes, enrolled and grades, while the admin oversees all aspects ensuring data control.
                <br></br><br></br>

                Software Stack: JavaScript, Python, SQLite, Flask, HTML

                </p>
                <a className='padding' href='https://github.com/mtapia01/cse106Project'>
                    <GitHubIcon fontSize='large' />
                </a>

            </div>
            <div id='game'>
                <h4>
                Animal Fight Club
                </h4>
                {/* vid goes here */}
                <p className='padding'> 
                    While adhering to the introductory scope of graphics concepts, the game features a user-controllable object and autonomously moving entities, engaging players in interactive gameplay. 
                    The collaborative effort within the group involves diverse tasks, from implementing core game logic to designing classes for drawing elements and defining behaviors of in-game entities. 
                    Leveraging object-oriented concepts, particularly polymorphism, the project demonstrates a creative fusion of graphics programming and game development, delivering an immersive and entertaining gaming environment.
                    <br></br><br></br>
                    Software Stack: OpenGL, C++
                </p>
                <a className='padding' href='https://github.com/AndreAsuncion/165-project'>
                    <GitHubIcon fontSize='large' />
                </a>
            </div>
            <Divider>
                <Chip color='info'  variant="outline" label="2022" />
            </Divider>
            <div id='course-monitor'>
                <h4>
                Course Monitor
                </h4>
                <p className='padding'>
                    Before the UC Merced course registration redesign, there was no way to get notified for an open seat.
                    Using a web scrapping library, the scrpit would refresh throughout the day to check for availability in a course.
                    Once a seat is open an email would be sent to my account with a link to the course and course ID to register.
                    <br></br><br></br>
                    Software Stack: JavaScript, Google API
                </p>
                <a className='padding' href='https://github.com/mtapia01/courseMonitor'>
                    <GitHubIcon fontSize='large' />
                </a>
                {/* vid goes here */}
            </div>
            <div>
                <h4>
                Sandbox Website
                </h4>
                <p className='padding'>
                    A semester long project where I took the role as a Full Stack Engineer.
                    Developed features like Sign Up/Log in, discussion board, and a Hangman game.
                    <br></br><br></br>
                    Software Stack: JavaScript, Python, HTML
                </p>
                <a className='padding' href='https://github.com/mtapia01/cse22'>
                    <GitHubIcon fontSize='large' />
                </a>
                {/* vid goes here */}
            </div>
            </body>
                <Footer></Footer>
        </div>
    )
}


export default Projects;