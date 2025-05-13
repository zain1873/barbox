import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import DashboardLayout from './Components/DashboardLayout';
import Login from '../src/pages/Login';
import ToySelector from './pages/ToySelector';
import PlushToys from './pages/PlushToys';
import DurableToys from "./pages/DurableToys"
import DogIntroForm from "./pages/DogIntroForm"
import DogSizeSelector from './pages/DogSizeSelector';
import Breed from './pages/Breed';
import DogBirthday from './pages/DogBirthday'
import Allergies from './pages/Allergies'
import EmailSection from './pages/EmailSection'
import PricingPlan from './pages/PricingPlan'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path='/toy-selector' element= {<ToySelector/>} />
          <Route path='/plush-toys' element= {<PlushToys/>} />
          <Route path='/durable-toys' element= {<DurableToys/>} />
          <Route path='/identity-form' element= {<DogIntroForm/>} />
          <Route path='/dog-size-selector' element= {<DogSizeSelector/>} />
          <Route path='/dog-breed' element= {<Breed/>} />
          <Route path='/adoption-date-step' element= {<DogBirthday/>} />
          <Route path='/food-preferences' element= {<Allergies/>} />
          <Route path='/you-email' element= {<EmailSection/>} />
          <Route path='/choose-pricing-pan' element= {<PricingPlan/>} />
          <Route path='/checkout' element= {<Checkout/>} />

      </Routes>
    </Router>
  );
}

export default App;
