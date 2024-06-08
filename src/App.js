import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies,setCookie] = useCookies(["cookieConsent"]);
  return (
    
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Footer />
      {!cookies.cookieConsent && <CookieConsent />}
    </div>
  );
}

export default App;
