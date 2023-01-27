import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div className="text-center h-screen justify-center items-center w-full bg-black">
      <Navbar/>
      <Banner />
      <Aboutme />
      {/* <h1 className="text-6xl text-white">App page</h1> */}

    </div>
  );
}

export default App;
