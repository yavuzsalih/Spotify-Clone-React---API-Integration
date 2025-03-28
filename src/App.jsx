import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import TableSection from "./Components/TableSection";
import PaymentSection from "./Components/PaymentSection";
import PlansSection from "./Components/PlansSection";
import FaqSection from "./Components/FaqSection";
import FooterSection from "./Components/FooterSection";
import SpotifyApi from "./Components/SpotifyApi";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SpotifyApi />
      <TableSection />
      <PaymentSection />
      <PlansSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export default App;
