import React, { useState } from 'react';

function DestinyCalculator() {
  const [name, setName] = useState('');
  const [destinyNumber, setDestinyNumber] = useState(null);
  const [error, setError] = useState(null);

  const calculateDestinyNumber = (e) => {
    e.preventDefault();

   
    
    const processedName = name.toUpperCase().replace(/\s/g, '');

    if (! processedName) {
        setError('Please enter your name to proceed');
        return;
      }

    const letterValues = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, 
      K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, 
      U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
    };

    
    const numbers = processedName.split('').map(letter => letterValues[letter]);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const destiny = reduceToSingleDigit(sum); 

    setDestinyNumber(destiny);
  };

  
  const reduceToSingleDigit = (number) => {
    while (number > 9) {
      const digits = number.toString().split('').map(Number);
      number = digits.reduce((acc, num) => acc + num, 0);
    }
    return number;
  };

  return (
    <div>
      <h1>Destiny Calculator</h1>
      <form>
      <label>
          Enter your full name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </label>
      <button onClick={calculateDestinyNumber}>Calculate</button>
      {destinyNumber !== null && (
        <p>Your destiny number is: {destinyNumber}</p>
      )}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default DestinyCalculator;