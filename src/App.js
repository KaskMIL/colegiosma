import Header from './components/header/Header';
import Carousel from './components/slider/Slider';
import Tab from './components/tabs/Tab';
import Niveles from './components/niveles/Niveles';
import Competitions from './components/competitions/Competitions';
import Contacto from './components/contact/Contacto';

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Carousel />
      <Tab />
      <Niveles />
      <Competitions />
      <Contacto />
    </div>
  );
}

export default App;
