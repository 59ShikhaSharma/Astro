import React from 'react';

const HoroscopeDetails = ({ horoscope, onClose }) => {
  return (
    <div className="horoscope-details">
      <h3>{horoscope.name}</h3>
      <p>{horoscope.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default HoroscopeDetails;