import "./App.css";
import Developers from "./components/Developers/Developers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="body">
      <Header />
      <Developers />
      <Footer />
    </div>
  );
}

export default App;
