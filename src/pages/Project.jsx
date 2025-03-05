import React from 'react';
import Projects from '../components/Projects.jsx';
import image1 from '../assets/circuit.png';
import image2 from '../assets/abstractcircuit.png';
import image3 from '../assets/codeBunch.png'
import image4 from '../assets/brackets.png'
import image5 from '../assets/reactScript.png'
import image6 from '../assets/vsCode.png'

const style = {
    margin: '25px',
    fontSize: '1rem',
    fontFamily: 'Arial',
    color: 'white',
};

function Project() {
    return (
        <>
            <p style={style}>Check out some of the fun things I'm either working on, or have completed!</p>
            <div className='project-container'>
                <Projects
                    image={image1}
                    link="https://github.com/bretaj/SQLemployeeTracker"
                    description="An employee management tracker using SQL & PostgreSQL" />
                <Projects
                    image={image2}
                    link="https://github.com/bretaj/bretsvehiclegenerator"
                    description="A fun vehicle generator using node.js" />
                <Projects
                    image={image3}
                    link="https://github.com/bretaj/bootcampProject1"
                    description="An inventory management application using JavaScript" />
                <Projects
                    image={image4}
                    link="https://github.com/bretaj/bretNodeJSreadMeCreator"
                    description="A readme.md file generator using node.js" />
                <Projects
                    image={image5}
                    link="https://github.com/bretaj/chiptuneapp"
                    description="A fun musical trivia game that is still in development" />
                <Projects
                    image={image6}
                    link="https://github.com/bretaj/prework-study-guide"
                    description="A hodgepodge of coding" />
            </div>
        </>
    );

}

export default Project;