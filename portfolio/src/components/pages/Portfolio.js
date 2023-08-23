import React from 'react';
import '../css/portfolio.css';
import Desk1 from "../../assets/desk1.png"

export default function Portfolio() {
  return (
    <div className='port'>
      <h1>Portfolio</h1>
      <h3>Here are some of my Projects that i worked on</h3>
      <div>
      <h3>Recipe Hub</h3>
      <a href="https://github.com/Cjmoye30/Recipe_Hub" target="_blank" rel="noopener noreferrer">
          <img src={Desk1} alt="Recipe Hub" />
        </a>
      </div>
      <div>
        <h3> Petfolio </h3>
        <a href="https://github.com/matthewbaty/petfolio" className='btn' target='_blank' rel='noopener noreferrer'>
        <img src={Desk1} alt="Portfolio Item" />
          </a>
      </div>
      <div>
        <h3>Fit Checker</h3>
        <a href="https://github.com/rm2023/fit-checker" className='btn' target='_blank' rel='noopener noreferrer'>
        <img src={Desk1} alt="Portfolio Item" />
        </a>
      </div>
    </div>
  );
}


