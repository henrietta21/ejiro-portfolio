import styles from './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { useTheme } from './components/ThemeProvider/ThemeProvider'

function App() {
  const { darkMode} = useTheme();
  return (
    <Router>
      <div  className={`${App}`}>
      
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
