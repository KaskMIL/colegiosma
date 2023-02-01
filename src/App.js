import Header from './components/header/Header';
import Carousel from './components/slider/Slider';
import Niveles from './components/niveles/Niveles';
import Competitions from './components/competitions/Competitions';
import Contacto from './components/contact/Contacto';

function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <Header />
      <Carousel />
      <Niveles />
      <Competitions />
      <Contacto />
    </div>
  );
}

export default App;
