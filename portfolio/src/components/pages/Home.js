import React from 'react';
import './Home.css';
import ME from '../../assets/me.jpg';


export default function Home() {
  return (

    <div className="Main">
      <h1>Hello my name is</h1>
      <h1>Roberto Mejia</h1>
      <h1>Fullstack Developer</h1>
      <img src={ME} alt="me" style={{ width: '400px', height: '480px', border: '5px inset black' }} />
      <h3>
      Recently completing the coding Certification bootcamp at UNC Charlotte. Programs include the basics of front-end 
      and back-end technologies including HTML5, CSS3, JavaScript, Bootstrap, React.js, Node.js, Express.js, MySQL, NoSQL 
      (MongoDB), Command Line, and Git. Worked with multiple team members to create functional mobile friendly web applications. 
      </h3>      
    </div>
  );
}
