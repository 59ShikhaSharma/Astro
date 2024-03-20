import React  from 'react';
import Card from '../components/Card';
import LifePath from '../components/LifePath';
import LifePathCalculator from '../components/NumeroPops/LifeCal';
import DestinyCalculator from '../components/NumeroPops/DesCal';
import './Numero.css';




const Numero = () => {


  return(
    <>
    <p className='numerology-para'>
From the moment we're born, our lives are intertwined with numbers. 
Dates of birth, even the rhythmic beat of our hearts - they all weave a numerical value that defines us. 
Numbers shape our experiences, influencing everything from academic 
paths to financial decisions. Numerology explores the mystical connections between numbers and our personalities, destinies, 
and even our compatibility with others. Whether through calendars, algorithms, or the rhythmic patterns of music, numbers 
are an ever-present force shaping our individual narratives and the collective 
human story.</p>
    <div className='card-names'>
      
     <Card
     title="Life"

     content= "lorem2jfierojfvirehfgurwfmdeisnfbruewfjirnfuiewjfibkodfuejewiofkdiebnfeio9"
     
     renderLifePath={({ openLife, setopenLife }) => (
      <LifePath openLife={openLife} setopenLife={setopenLife}>
        <LifePathCalculator />
      </LifePath>
    )}
    />

    <Card
    title="Manik"
    content= "acfjiedacfnjiefckdancjiefjkednbfcjeirqljdiencjedowajcfueiwhfueiwofbnhjeirwfjr;"
    renderLifePath={({ openLife, setopenLife }) => (
      <LifePath openLife={openLife} setopenLife={setopenLife}>
        <DestinyCalculator/>
      </LifePath>
    )}
    />



    </div>

    <div className='footer-div'>
          <p>&copy; 2024 Your Astrology Website</p>
        </div>
    </>
  )

}

export default Numero;