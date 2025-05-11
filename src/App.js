import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import DashboardLayout from './Components/DashboardLayout';
import Login from '../src/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<DashboardLayout />} />

      </Routes>
    </Router>
  );
}

export default App;
