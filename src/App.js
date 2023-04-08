import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Destinations from './routes/Destinations';
import Contact from './routes/Contact'
import Home from './routes/Home';
import About from './routes/About';

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
