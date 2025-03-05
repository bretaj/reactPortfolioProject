import React from 'react';

function Resume() {
    const style = {
        fontSize: '1.25rem',
        margin: '20px',
        fontFamily: 'arial',
        textAlign: 'center',
        color: 'white',
    }
    const para = {
        marginTop: '10px',
    }

    return (
        <div style ={style}>
            <p>
                Click <a href="#"><span className='res-Span'>here</span></a> to download a .PDF of my resume
            </p>
            <p style ={para}>my proficiencies include:</p>
            <ul className='ul-grid'>
                <li className='li-space'>
                    React
                </li>
                <li className='li-space'>
                    SQL
                </li>
                <li className='li-space'>
                    JavaScript
                </li>
                <li className='li-space'>
                    APIs
                </li>
            </ul>
        </div>
    ); 
}

export default Resume;