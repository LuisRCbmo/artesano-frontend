import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/organism/header/header";
import CarouselSection from "./components/organism/carouselSection/carouselSection";
import ProductsSection from "./components/organism/productsSection/productsSection";
import LinesSection from "./components/organism/linesSection/linesSection";
import Footer from "./components/organism/footer/footer";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/utils/variables.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  if (!data) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="App">
      <Header src={data.src_logo_header} navItems={data.navItems_info} />
      <CarouselSection carouselItems={data.carouselItems_info} />
      <ProductsSection products={data.products_info} />
      <LinesSection lines={data.lines_info} />
      <Footer footer_Info={data.footer_info} />
    </div>
  );
}

export default App;
