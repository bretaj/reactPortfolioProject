import React, { useState } from 'react';
import '../assets/contactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    className="form-input" 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="form-button" type="submit">Send Message</button>
        </form>
    );
}

export default ContactForm;