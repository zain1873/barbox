import ContentContainer from './Components/ContentSec';
import Cta from './Components/Cta';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import SplitSection from './Components/SplitSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <ContentContainer/>
      <Cta/>
      <SplitSection/>
    </div>
  );
}

export default App;
