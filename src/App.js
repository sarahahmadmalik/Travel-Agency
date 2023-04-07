import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Destinations from './pages/Destinations';
import Contact from './pages/Contact'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Destinations" element={<Destinations/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
