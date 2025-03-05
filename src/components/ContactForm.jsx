import React, { useState } from 'react';
import '../assets/contactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error message when user starts typing
        if (error) {
            setError('');
        }
    };

    const validateEmail = (email) => {
        // Simple email regex for validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate email
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        // If validation passes, log the form data
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({ name: '', email: '', message: '' });
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
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
        </form>
    );
}

export default ContactForm;