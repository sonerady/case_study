import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./config/Route";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Switch from "./components/switch/Switch";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch />
      <Pages />
      <Navbar />
    </Router>
  );
}

export default App;
