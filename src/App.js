import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
