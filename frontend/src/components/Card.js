// import LifePath from "./LifePath";
import React, { useState } from 'react';
// import LifePathCalculator from "./NumeroPops/LifeCal";


const Card = ({title, content, renderLifePath}) => {

    const [openLife, setopenLife] = useState(false);

    return(
        <>
        <div className="card-container-numero">
            
            {title && <h1 className='card-title'>{title}</h1>}
            <p className='card-con-para'>
From the moment we're born, our lives are intertwined with numbers. Dates of birth, addresses, phone numbers, even the rhythmic beat of our hearts - they all weave a numerical tapestry that defines us.</p>
            <div className='card-content'>
                
                
            
            {/* {btn && <button className='btn-card' onClick={btn}>Click Me</button>} */}
            <button className="btn-card card-button" onClick={() => setopenLife(true)}>Click Me</button>
            
            {renderLifePath({ openLife, setopenLife })}
            {/* <LifePath openLife = {openLife} setopenLife = {setopenLife}>
              <LifePathCalculator/>
            </LifePath> */}
           
            </div>
      
        </div>
        </>
    )

}


export default Card;