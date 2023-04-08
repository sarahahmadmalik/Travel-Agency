import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Destinations from './Destinations';
import Contact from './Contact'
import Home from './Home';
import About from './About';

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
