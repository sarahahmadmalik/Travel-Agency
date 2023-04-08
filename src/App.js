import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Destinations" element={<Destinations/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
