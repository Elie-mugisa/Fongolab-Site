import "./App.css";
import Footer from "./module/footer/footer";
import Navigation from "./module/navigation/index";
import Hero1 from "./module/section1/bg_anim";
import Hero2 from "./module/section2/bg_hero2";
import Hero3 from "./module/section3/bg_hero3";
import Hero4 from "./module/section4/bg_Hero4";
import Hero5 from "./module/section5/bg_Hero5";
import Hero6 from "./module/section6/Hero6";

function App() {
  return (
    <div className="relative bg-main ">
      {/* First Section */}
      <Hero1 />

      {/* Second Section */}
      <Hero2 />

      {/* Third Section */}
      <Hero3 />

      {/* Fourth Section */}
      <Hero4 />

      {/* Fifth Section */}
      <Hero5 />

      {/* Sixth Section */}
      <Hero6 />

      {/* Footer */}
      <Footer />

      {/* Navigation */}
      <Navigation />
    </div>
  );
}

export default App;
