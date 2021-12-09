import React from "react";

import {
  Blog,
  Header,
  Footer,
  Possibility,
  WhatGPT3,
  Features,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}
