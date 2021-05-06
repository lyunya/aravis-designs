import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './components/SideBar';

function App() {
  return (
    <Router>
      <SideBar />
      <NavBar />
    </Router>
  );
}

export default App;
