import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./config/Route";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Switch from "./components/switch/Switch";
import "./App.css";
import axios from "axios";

function App() {
  const pathname = window.location.pathname;
  const isPathname = pathname?.startsWith("/campaign") ? true : false;

  return (
    <Router>
      {!isPathname && <Header />}
      {!isPathname && <Switch />}
      <Pages />
      {!isPathname && <Navbar />}
    </Router>
  );
}

export default App;
