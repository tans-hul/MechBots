// import './App.css';
import LeftNavbar from "./components/LeftNavbar";
import TopNavbar from "./components/topNavbar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <div className="flex w-fit">
        <LeftNavbar />
        <TopNavbar />

        <HomePage />
      </div>
    </div>
  );
}

export default App;
