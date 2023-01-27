import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-center h-screen justify-center items-center w-full bg-black">
      <Navbar/>
      <Banner/>
      {/* <h1 className="text-6xl text-white">App page</h1> */}

    </div>
  );
}

export default App;
