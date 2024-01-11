import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
      <div className='App'>
      
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
