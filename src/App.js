import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organism/header/header";
import LandingPage from "./components/templates/landingPage/landingPage";
import DynamicCatalog from "./components/templates/dynamicCatalog/dynamicCatalog";
import Product from "./components/templates/product/product";
import ContactPage from "./components/templates/contactPage/contactPage";
import Spinner from "react-bootstrap/Spinner";

function groupByLineAndType(products) {
  const groupedData = {};

  products.forEach((product) => {
    const { line, category } = product;
    const linesArray = Array.isArray(line) ? line : [line];

    linesArray.forEach((singleLine) => {
      if (!groupedData[singleLine]) {
        groupedData[singleLine] = [];
      }

      if (!groupedData[singleLine].includes(category)) {
        groupedData[singleLine].push(category);
      }
    });
  });

  return groupedData;
}

function getUniqueTypes(products) {
  const uniqueTypes = products.reduce((acc, product) => {
    if (!acc.some((item) => item.category === product.category)) {
      acc.push({ category: product.category });
    }
    return acc;
  }, []);
  return uniqueTypes;
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

  const filteredLines = data.lines_info.map((line) => ({
    name: line.name,
    description: line.description,
    categories: groupedProducts[line.name] || [],
  }));

  const navItemsDynamic = filteredLines.map((line) => ({
    title: line.name,
    items: [
      { name: "Ver catalogo" },
      ...line.categories.map((category) => ({
        name: category,
      })),
    ],
  }));

  const staticNavItems = [
    { name: "Inicio", route: "/" },
    { name: "Contáctanos", route: "/contact" }
  ];

  const navItemsWithStatic = [
    staticNavItems[0],
    ...navItemsDynamic,
    staticNavItems[1]
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
                lines_info={data.lines_info}
                footer_info={data.contact_info}
              />
            }
          ></Route>

          <Route
            path="/line/:lineName/category/:categoryName"
            element={
              <DynamicCatalog
                products_info={data.products_info}
                lines_info={data.lines_info}
                footer_info={data.contact_info}
              />
            }
          />

          <Route
            path="/:productName"
            element={
              <Product
                products_info={data.products_info}
                footer_info={data.contact_info}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactPage contact_info={data.contact_info} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
