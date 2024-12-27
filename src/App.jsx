import React, {useEffect, useState} from "react";
import LandingPage from "./Pages/LandingPage";
import {Route, Routes} from "react-router-dom";
import Watch from "./Pages/Watch";
import Stream from "./Pages/Stream";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/watch/:title" element={<Watch />} />
      <Route path="/stream/:link" element={<Stream />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
