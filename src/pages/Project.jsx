import React from 'react';
import Projects from '../components/Projects.jsx';
import image1 from '../assets/circuit.png';
import image2 from '../assets/abstractcircuit.png';
import image3 from '../assets/codeBunch.png'

const style = {
    marginLeft: '20px',
    fontSize: '1.75rem',
};

function Project() {
    return (
            <>
            <p style ={style}>Portfolio</p>
            <div className='project-container'>
            <Projects 
            image={image1}

            description="textextext"/>
            <Projects
            image={image2}

            description="textextext" />
            <Projects
            image={image3}

            description="textextext" />
            <Projects
            image={image3}

            description="textextext" />
            <Projects
            image={image3}

            description="textextext" />
            <Projects
            image={image3}

            description="textextext" />
            </div>
            </>
    );
    
}

export default Project;