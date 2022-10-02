import { useRef } from 'react';
import './App.css';
import Poisson from './components/Poisson';
import Bernoulli from './components/Bernoulli';
import './styles/structure.css'
import Binomial from './components/Binomial';

function App() {

  const poisson = useRef(null)
  const bernoulli = useRef(null)
  const binomial = useRef(null)

  const scrollToSection = (elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  })

  return (
    <div className="App">
      <div >
        <ul className='navigationBar'>
          <li onClick={() => scrollToSection(poisson)} className="link">
            Poisson
          </li>
          <li onClick={() => scrollToSection(bernoulli)} className="link">
            Bernoulli
          </li>
          <li onClick={() => scrollToSection(binomial)} className="link">
            Binomial
          </li>
        </ul>
      </div>
      <div ref={poisson} className="section">
        <Poisson />
      </div>
      <div ref={bernoulli} className="section">
        <Bernoulli />
      </div>
      <div ref={binomial} className="section">
        <Binomial />
      </div>
      <div className='rotulo'>
        <p>
          Made By: Gian Herrera
        </p>
      </div>
    </div>
  );
}

export default App;
