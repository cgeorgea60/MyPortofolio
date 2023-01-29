import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <div className="text-center h-screen justify-center items-center w-full bg-black">
      <Navbar/>
      <Banner/>
      <Service/>

    </div>
  );
}

export default App;
