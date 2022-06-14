import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css";
import MainPage from "./layout/MainPage"
import Welcome from "./layout/Welcome"
import HowToCook from "./layout/HowToCook"
import Navbar from "./component/navbar/navbar"


function App() {
  return (
    <BrowserRouter>
      <div className="App" id="page-top">
        <header>
          <Navbar />
        </header>
        <div>
          <Routes>
            {/* Khi khop path thi render element mong muon */}
            <Route path="/" element={<Welcome />} />
            <Route path="/CookingJar" element={<MainPage />} />
            <Route path="/Guide" element={<HowToCook />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
