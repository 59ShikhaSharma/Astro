import React, { useState } from 'react';

function LifePathCalculator() {
  const [birthDateString, setBirthDateString] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState(null);
  const [error, setError] = useState(null);

  const calculateLifePath = (e) => {
    e.preventDefault();

    const birthDate = birthDateString.match(/\d{4}-\d{2}-\d{2}/);

    if (! birthDate) {
      setError('Invalid birth date format. Please use YYYY-MM-DD.');
      return;
    }

    var digits = birthDate[0].split('').map(Number).filter((num) => !isNaN(num));;

    while (digits.length > 1) {
      let sum = digits.reduce((acc, curr) => acc + curr, 0);
      if (sum > 9) {
        digits = sum.toString().split('').map(Number);
      } else {
        digits = [sum];
      }
    }

    const lifePath = digits[0];
    setLifePathNumber(lifePath);
    setError(null);
  };

  return (
    <div>
      <h1>Life Path Calculator</h1>
      <form onSubmit={calculateLifePath}>
        <label >
          Birth Date (YYYY-MM-DD):
          <input
            className='life-cal-label'
            type="text"
            value={birthDateString}
            onChange={(e) => setBirthDateString(e.target.value)}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {lifePathNumber && <p>Your Life Path Number is: {lifePathNumber}</p>}
    </div>
  );
}

export default LifePathCalculator;