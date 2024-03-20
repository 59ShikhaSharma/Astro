import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const{logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () =>{
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1 className="head-zodiac">ZodiacMystique</h1>
                </Link>
                <nav>
                    {user && (
                        <div className="navbar">
                            <Link to='/tarot'><span>Tarots</span></Link>
                            <Link to= '/signs'><span>Zodiac Signs</span></Link> 
                            <Link to= '/numerology'><span>Numerology</span></Link>
                            <Link to= '/connect'><span>Connect With Us</span></Link>
                            <Link to= '/about'><span>About Astrology</span></Link>
                            <div className="photo-logout">
                            <span><img className="avtar" src= {require("../assets/avtar.png")} alt="avtar" /></span>
                            <button onClick={handleClick}>Log-Out</button>
                            </div>
                            
                        </div>
                    )}
                    {!user && (
                        <div className="nav-contents-log-sign">
                        <Link to="/login" className="log-name" >Login</Link>
                        <Link to="/signup" className="sign-name">Signup</Link>
                    </div>
                    )}  
                </nav>
            </div>
        </header>
    )
}

export default Navbar;