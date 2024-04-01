import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Signs from './pages/Signs';
import Numero from './pages/Numero';
import Connect from './pages/Connect';
import About from './pages/About';
import Tarot from './pages/Tarot';


function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className='app-bar'>
          <Navbar />
          <div className='pages'>
            <Routes>
              <Route path='https://astro-eosin-two.vercel.app/' element={user ? <Home /> : <Navigate to='/login' />} />
              <Route path='https://astro-eosin-two.vercel.app/signs' element={user ? <Signs /> : <Navigate to='/' />} />
              <Route path='https://astro-eosin-two.vercel.app/numerology' element={user ? <Numero /> : <Navigate to='/' />} />
              <Route path='https://astro-eosin-two.vercel.app/api/user/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='https://astro-eosin-two.vercel.app/api/user/signup' element={!user ? <SignUp /> : <Navigate to='/' />} />
              <Route path='https://astro-eosin-two.vercel.app/connect' element={user ? <Connect /> : <Navigate to='/' />} />
              <Route path='https://astro-eosin-two.vercel.app/about' element={user ? <About /> : <Navigate to='/' />} />
              <Route path='https://astro-eosin-two.vercel.app/tarot' element={user ? <Tarot /> : <Navigate to='/' />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
