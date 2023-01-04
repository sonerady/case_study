import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./config/Route";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Pages />
      <Navbar />
    </Router>
  );
}

export default App;
