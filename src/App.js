import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./config/Route";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Switch from "./components/switch/Switch";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const { loading, promotions } = useSelector((state) => state.details);

  return (
    <Router>
      {!isVisible && <Header />}
      {!isVisible && <Switch />}
      <Pages isVisible={isVisible} setIsVisible={setIsVisible} />
      {!isVisible && <Navbar />}
    </Router>
  );
}

export default App;
