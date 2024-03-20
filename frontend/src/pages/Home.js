import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

const Card = ({ header, Zodiac, Element, Planet, Qualities }) => {
  return (
    <div className='card-text-container'>
      <h2>{header}</h2>
      <div className='card-text'>
        
        <h4>{Zodiac}</h4>
        <h4>{Element}</h4>
        <h4>{Planet}</h4>
        <h4>{Qualities}</h4>

      </div>
    </div>

  );
};


const Home = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div className='carousel-container'>
          <Carousel className='home-carousel'>
            <div className='image-carousel'>
              <img src="https://media.allure.com/photos/60fed2b43a2765b3b97ee23c/4:3/w_3112,h_2334,c_limit/wheel%20of%20fortune%20tarot%20card.jpg" alt='tarot' />
            </div>

            <div className='image-carousel'>
              <img src="https://img.lovepik.com/photo/45013/3774.jpg_wh860.jpg" alt='tarot' />
            </div>

            <div className='image-carousel'>
              <img src="https://www.verywellmind.com/thmb/q7_IZ1Y3aUp8kdsakynH693H3cU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-psychology-behind-why-we-care-about-astrology-5217929_color_text_v1-147d35a8a270445291379210bb922378.png" alt='tarot' />
            </div>

            <div className='image-carousel'>
              <img src="https://www.chiragdaruwalla.com/wp-content/uploads/2023/06/Why-Importance-Of-Astrology.jpg" alt='tarot' />
            </div>


          </Carousel>
        </div>
        <div>
          <div className='Carousel-right-content'>
            <div className='sub-carousel-right-content'><Card header='Tarots' Zodiac="A playing Card" Element="Found in Bible" Planet="Fortune Wheel" Qualities="Used since Ages"></Card></div>
            <div className='sub-carousel-right-content'><Card header='Zodiac Sign' Zodiac="Total 8 Zodiac Signs" Element=" Aries, Taurus, Gemini" Planet="Cancer,Leo,Virgo" Qualities="Libra, and Scorpio"></Card></div>
          </div>
          <div className='Carousel-right-content'>
            <div className='sub-carousel-right-content'><Card header='Astrology World' Zodiac="Predicting mundane events" Element="Understand human" Planet="Define Future " Qualities="Sense of Control"></Card></div>
            <div className='sub-carousel-right-content'><Card header='Importance' Zodiac="Define Future" Element="Read Human" Planet="Provide Zodiac details" Qualities="Intolerance for Ambiguilty"></Card></div>
          </div>
        </div>
      </div>

      <div><h1 className='our-services-header'>Our Services</h1></div>
      <div className='our-services-body'>

        <div><img src="https://lalitsharmadotin.files.wordpress.com/2022/09/kundli.png" alt="tarot" className='image' /></div>
        <div><img src="https://www.astrologerumesh.com/wp-content/uploads/2021/09/Remedial-Astrology-Services.jpg" alt="services" className='image' /></div>
        <div><img src="https://5.imimg.com/data5/HW/EV/MY-14166102/gemology-astrology-services-500x500.jpg" alt="unique" className='image' /></div>

      </div>
      <br></br><br></br>
      <div className='footer-div'>
        <p>&copy; 2024 Your Astrology Website</p>
      </div>
    </div>


  )
}

export default Home

