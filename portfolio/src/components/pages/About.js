import React from 'react';
import '../css/About.css';
import ME from '../../assets/me.jpg';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"

export default function Home() {
  return (

    <div className="Main">
      <h1>Hello my name is Roberto Mejia Fullstack Developer</h1>

      <img src={ME} alt="me" style={{ width: '400px', height: '500px', borderRadius: '10px' }} />
     
      <h3>
        Recently completing the coding Certification bootcamp at UNC Charlotte. Programs include the basics of front-end
        and back-end technologies including HTML5, CSS3, JavaScript, Bootstrap, React.js, Node.js, Express.js, MySQL, NoSQL
        (MongoDB), Command Line, and Git. Worked with multiple team members to create functional mobile friendly web applications.
      </h3>
      <h3>
        <p>Fully certified in fullstack as of july from UNC charlotte, the Program included instructional time with learners of 240 hours, and spent up to an
          additional 240 hours on homework and projects.</p>
        <p>Using git hub to upload/download homework and also collaberating with classmates on deployed websites projects. Learned to use visual studio to
          create mobile friendly web apps while sending databases to mongoDB and Deploying on heroku.</p>
        <p>In my react portfolio I have implemented what I have learned!</p>
      </h3>
      <div className="icons">
        <a
          href="https://github.com/rm2023"
          target="_blank" // Add target="_blank" to open in a new window/tab
          rel="noopener noreferrer" // Recommended for security reasons
          aria-label="GitHub"
        >
          <FaGithub size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/rmcoding23/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={50} />
        </a>
        <a
          href="mailto:rmeji2@gmail.com"
          target="_blank" // Add target="_blank" to open in a new window/tab
          rel="noopener noreferrer" // Recommended for security reasons
          aria-label="Email"
        >
          <MdOutlineEmail size={50} />
        </a>
      </div>
    </div>
  );
}
