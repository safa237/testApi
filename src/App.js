import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ecommerce-api-898h.onrender.com/api/v1/auth/register', formData);
      
      // Handle the response here (e.g., show success message or redirect to login page)
      console.log('User registered successfully:', response.data);
    } catch (error) {
      // Handle errors (e.g., show error message to the user)
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <label>Phone:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

      <button type="submit">Register</button>
    </form>
    </div>
  );
}

export default App;
