import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [requiredDate, setRequiredDate] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [showOutput, setShowOutput] = useState(false);

  const calculateAge = () => {
    if (!birthDate || !requiredDate ) {
      alert('Please select both dates');
      return;
    }else if(!name){
      alert('Please enter your name')
    }

    const birth = new Date(birthDate);
    const required = new Date(requiredDate);

    let years = required.getFullYear() - birth.getFullYear();
    let months = required.getMonth() - birth.getMonth();
    let days = required.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(required.getFullYear(), required.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
    setShowOutput(true);
  };

  return (
    <div className='maincontainer'>
      <div>
        <h1>AGE CALCULATION</h1>
        <form>
          <div className='birth-con'>
            <label htmlFor="name">Name:</label>
            <input 
              type='text' 
              className='date-picker'
              placeholder='Enter Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              
            />
          </div>
          <div className='birth-con'>
            <label>Date of Birth:</label>
            <input 
              type="date" 
              value={birthDate} 
              onChange={(e) => setBirthDate(e.target.value)} 
              className='date-picker' 
            />
          </div>
          <div className='birth-con'>
            <label>Required Date:</label>
            <input 
              type="date" 
              value={requiredDate} 
              onChange={(e) => setRequiredDate(e.target.value)} 
              className='date-picker' 
            />
          </div>
          <button type="button" onClick={calculateAge}>Calculate</button>
        </form>
      </div>
      {showOutput && (
        <div className='output-con'>
          <p className='out-p'>Dear {name}</p>
          <div className='output-date'>
            <div className='output-con-date'>
              <b>{age.years}</b>
              <p className='out-p'>years</p>
            </div>
            <div className='output-con-date'>
              <b>{age.months}</b>
              <p className='out-p'>months</p>
            </div>
            <div className='output-con-date'>
              <b>{age.days}</b>
              <p className='out-p'>days</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
