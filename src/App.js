import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="text-center h-screen justify-center items-center w-full bg-black">
      <Navbar/>
      <Banner/>
      <Aboutme/>

      <Service/>
      <Projects/>


      <Footer />

 
    </div>
  );
}

export default App;
