import zodiacdata from '../assets/zodiacdata.json'
import '../pages/signs.css'

const Card = ({ name, symbol, element, ruling_planet, qualities }) => {
    return (
        <div className='card-container'>
            <div className='card'>

                <div className='card-back'>
                    <h2>{name}</h2>
                    <p><strong>Symbol:</strong> {symbol}</p>
                    <p><strong>Element:</strong> {element}</p>
                    <p><strong>Ruling_planet:</strong> {ruling_planet}</p>
                    <p><strong>Qualities:</strong> {qualities.join(', ')}</p>
                </div>
                
                <div className='card-front'></div>
            </div>
        </div>

    );
};



const Signs = () => {

    const baseclass = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

    }

    console.log(zodiacdata);
    return (
        <div style={baseclass}>

            {
                zodiacdata.zodiac_signs.map((sign, index) => (
                    <Card
                        key={index}
                        name={sign.name}
                        symbol={sign.symbol}
                        element={sign.element}
                        ruling_planet={sign.ruling_planet}
                        qualities={sign.qualities}
                    />
                ))
            }
        <div className='footer-div'>
          <p>&copy; 2024 Your Astrology Website</p>
        </div>

        </div>
        

    )
}

export default Signs;