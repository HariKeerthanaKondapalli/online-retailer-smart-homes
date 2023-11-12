import React, { useState } from 'react';
import './LoginModal.css'; // Import your CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/actions/authActions'; // Assuming you have a register action

const Register = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('customer');
  const { users } = useSelector((state) => state.userReducer);

  const handleRegister = () => {
    // Check if the username already exists
    const existingUser = users.find((u) => u.name === username);
    if (existingUser) {
      alert('Username already exists');
      return;
    }

    // If the username is unique, dispatch the register action
    console.log(`Registering with username: ${username} and password: ${password}`);
    dispatch(register({ name: username, password, type: selectedOption }));

    // Optionally, you might want to dispatch a login action here if needed
    // dispatch(login(user.id));

    onClose(); // Close the modal after registration (you may want to handle this differently in a real application)
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Register</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="type">Type:</label>
          <select id="type" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="storemanager">Store Manager</option>
            <option value="salesmanager">Sales Manager</option>
          </select>

          <button type="button" onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
