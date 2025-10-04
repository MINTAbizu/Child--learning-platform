import React, { useState } from 'react';

function Contactpage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Submitting values:", formData);
    
    try {
        const response = await fetch('http://localhost:9000/Api/user/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        console.log("Response status:", response.status);
        
        const data = await response.json();
        console.log("Response data:", data);
        
        if (!response.ok) {
            throw new Error(data.error || 'Failed to submit');
        }
        
        alert('Contact information submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: ''
        });
        
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit contact information. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <section id="contact-section">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="input-box">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <span>Full Name</span>
            </div>
            <div className="input-box">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <span>Email</span>
            </div>
            <div className="input-box">
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <span>Phone Number</span>
            </div>
            <div className="input-box">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="input-box">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contactpage;