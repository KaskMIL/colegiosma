import Header from './components/header/Header';
import Carousel from './components/slider/Slider';
import Niveles from './components/niveles/Niveles';

function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <Header />
      <Carousel />
      <Niveles />
    </div>
  );
}

export default App;
