import React, { useState } from 'react';
import './About.css';
import HoroscopeDetails from './HoroscopeDetails';
import { Link } from "react-router-dom"

const AboutAstrology = () => {
  const [selectedHoroscope, setSelectedHoroscope] = useState(null);

  

  const handleExploreHoroscopes = (horoscope) => {
    setSelectedHoroscope(horoscope);
  };

  const handleCloseDetails = () => {
    setSelectedHoroscope(null);
  };

  const horoscopes = [
    { name: 'Aries', description: 'Aries people are bold, energetic, full of vitality, charismatic, fun, lively, passionate, and driven by their hearts and desires. They have to feel ~all in~ on something to succeed in it, but, when they are, they are unstoppable. They thrive on competition, challenges, targets, and rivalry.' },
    { name: 'Taurus', description: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors. Taurus is ruled by Venus, the enchanting planet that governs love, beauty, and money.' },
    { name: 'Gemini', description: 'Gemini, the Zodiac sign which rules the final days of May and much of the month of June, is an air sign known for its love of change and its ability to shift from topic to topic with ease. Symbolized by a set of twins, it is both deeply independent and in search of a lifelong partner.' },
    { name: 'Cancer', description: 'Cancer is ruled by the moon, the celestial body that represents comfort, self-care, and maternal energies. Accordingly, Cancers tend to be domestically oriented. They love to create cozy, safe spaces that serve as their personal sanctuaries, then spend lots of time in them.' },
    
    // Add more horoscope details as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="about-astrology-container">
      <h2>About Astrology</h2>

      {/* Info Box 1: Zodiac Signs */}
      <div className="info-box">
        <div className="info-box-body">
          <div className="info-box-title">Unlocking the Mysteries: Exploring the Enchanting World of Zodiac Signs</div>
          <div className="info-box-text">
          Zodiac signs are twelve astrological divisions based on the celestial sphere's apparent path of the Sun over the course of a year. Each zodiac sign corresponds to a specific period, typically spanning about a month, and is associated with particular personality traits, characteristics, and symbolism. The twelve zodiac signs are:
          </div>
          <br></br>
          <Link to= '/signs'><button className="button"><span>Zodiac Signs</span></button></Link>
          
        </div>
      </div>

      {/* Info Box 2: Horoscope Predictions */}
      <div className="info-box">
        <div className="info-box-body">
          <div className="info-box-title">Stargazing Insights: Your Cosmic Forecast Awaits!</div>
          <div className="info-box-text">
            {selectedHoroscope ? (
              <HoroscopeDetails horoscope={selectedHoroscope} onClose={handleCloseDetails} />
            ) : (
              <>
                {horoscopes.map((horoscope, index) => (
                  <div key={index} className='info-box-text-details'>
                    <button className="button" onClick={() => handleExploreHoroscopes(horoscope)}>
                      Explore {horoscope.name}
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Info Box 3: Contact for More Information */}
      
      <div className="info-box">
        <div className="info-box-body">
           <div className="info-box-title">Contact for More Information</div>
           <form onSubmit={handleSubmit}>
             <div className="form-group">
               <label htmlFor="name">Your Name <span style={{color:'red'}}>*</span></label>
               <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
            </div>

           <div className="form-group">
               <label htmlFor="email">Email address <span style={{color:'red'}}>*</span></label>
              <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
               <label htmlFor="message">Message</label>
               <textarea id="message" className="form-control" rows="3" placeholder="Your message..."></textarea>
             </div>

             <button className="submit-button" type="submit">
               Submit
             </button>
           </form>
         </div>
     </div>
     <div className='footer-div'>
          <p>&copy; 2024 Your Astrology Website</p>
        </div>
    </div>
  );
};

export default AboutAstrology;

