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
                Click <a href="#">here</a> to download a .PDF of my resume
            </p>
            <p style ={para}>my proficiencies include:</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    React
                </li>
                <li>
                    React
                </li>
                <li>
                    React
                </li>
            </ul>
        </div>
    ); 
}

export default Resume;