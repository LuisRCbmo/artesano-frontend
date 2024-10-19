import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/organism/header/header";
import LandingPage from "./components/templates/landingPage/landingPage";
import DynamicCatalog from "./components/templates/dynamicCatalog/dynamicCatalog";

import Footer from "./components/organism/footer/footer";
import Spinner from "react-bootstrap/Spinner";

function groupByLineAndType(products) {
  const groupedData = {};

  products.forEach((product) => {
    const { line, type } = product;

    const linesArray = Array.isArray(line) ? line : [line];

    linesArray.forEach((singleLine) => {
      if (!groupedData[singleLine]) {
        groupedData[singleLine] = [];
      }

      if (!groupedData[singleLine].includes(type)) {
        groupedData[singleLine].push(type);
      }
    });
  });

  return groupedData;
}

function getUniqueTypes(products) {
  const uniqueTypes = products.reduce((acc, product) => {
    if (!acc.some((item) => item.type === product.type)) {
      acc.push({ src: product.src, type: product.type });
    }
    return acc;
  }, []);
  return uniqueTypes;
}

function getUniqueLines(products) {
  const uniqueLines = products.reduce((acc, product) => {
    const linesArray = Array.isArray(product.line)
      ? product.line
      : [product.line];

    linesArray.forEach((line) => {
      if (!acc.some((item) => item.line === line)) {
        acc.push({ src: product.src, line: line });
      }
    });

    return acc;
  }, []);

  return uniqueLines;
}

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

  const groupedProducts = groupByLineAndType(data.products_info);
  const uniqueProductTypes = getUniqueTypes(data.products_info);
  const uniqueLines = getUniqueLines(data.products_info);
  const navItemsDynamic = Object.keys(groupedProducts).map((line) => ({
    title: line,
    items: groupedProducts[line].map((type) => ({
      name: type,
      href: `#${type}`,
    })),
  }));

  const staticNavItems = [
    { name: "Inicio", href: "#" },
    { name: "Contáctanos", href: "#" },
    { name: "Conócenos", href: "#" },
  ];

  const navItemsWithStatic = [
    staticNavItems[0],
    ...navItemsDynamic,
    staticNavItems[1],
    staticNavItems[2],
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Header src={data.src_logo_header} navItems={navItemsWithStatic} />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                carouselItems_info={data.carouselItems_info}
                productTypes_info={uniqueProductTypes}
                lines_info={uniqueLines}
              />
            }
          ></Route>

          <Route
            path="/line/:lineTitle/productTitle/:productTitle"
            element={<DynamicCatalog />}
          />
        </Routes>
      </BrowserRouter>

      <Footer footer_Info={data.footer_info} />
    </div>
  );
}

export default App;
