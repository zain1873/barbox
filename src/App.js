import ChatUs from './Components/ChatUs';
import ContentContainer from './Components/ContentSec';
import Cta from './Components/Cta';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import SplitSection from './Components/SplitSection';
import Testimonial from './Components/Testimonial';
import VideoSection from './Components/VideoSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <ContentContainer/>
      <Cta/>
      <Testimonial/>
      <VideoSection/>
      <ChatUs/>
      <Faqs/>
      <Footer />
    </div>
  );
}

export default App;
