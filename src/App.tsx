import "./App.css";
import { useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Stats from "./Stats";
import Calendar from "./Calendar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!sessionStorage.getItem("publicAddress")
  );

  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/dashboard" element={<Calendar />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/*" element={<>Error! Wrong page</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
