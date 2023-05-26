import './App.scss';
import Navigation from './components/layout/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Employees from './pages//Employees'
import EmployeeDetail from './components/admin/employee/EmployeeDetail';


function App() {
  return (
    <Router>
      <div className='app'>
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/employee" element={<Employees/>} />
          <Route path="/employee/detail/:id" element={<EmployeeDetail/>} />
        </Routes>
      </div>

    </Router>


  );
}

export default App;
