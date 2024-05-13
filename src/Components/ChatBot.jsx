import React, { useState } from 'react';
import './ChatBot.css';
const Chatbot = () => {
  const [department, setDepartment] = useState('Marketing');
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter your marketing query here...');

  const handleDepartmentChange = (e) => {
    const selectedDepartment = e.target.value;
    setDepartment(selectedDepartment);
    if (selectedDepartment === 'Sales') {
      setPlaceholder('Enter your sales query here...');
    } else {
      setPlaceholder('Enter your marketing query here...');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="department-select">
        <label htmlFor="department">Select Department:</label>
        <select id="department" value={department} onChange={handleDepartmentChange}>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
