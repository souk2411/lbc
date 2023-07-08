import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Routes.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
