import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Models from "./pages/Models"
import Dealerships from "./components/Dealerships";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/models" element={<Models/>}></Route>
        <Route path="/dealerships" element={<Dealerships/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
