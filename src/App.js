import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organism/header/header";
import LandingPage from "./components/templates/landingPage/landingPage";
import DynamicCatalog from "./components/templates/dynamicCatalog/dynamicCatalog";
import Product from "./components/templates/product/product";
import ContactPage from "./components/templates/contactPage/contactPage";
import AboutUsPage from "./components/templates/AboutUsPage/AboutUsPage";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/carruselItem", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY, 
        },
      }).then((res) => res.json()),
  
      fetch("http://localhost:5000/api/lines", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }).then((res) => res.json()),
  
      fetch("http://localhost:5000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }).then((res) => res.json()),
  
      fetch("http://localhost:5000/api/contact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }).then((res) => res.json()),
    ])
      .then(([carouselItems, lines, products, contactInfo]) => {
        setData({
          carouselItems_info: carouselItems,
          lines_info: lines,
          products_info: products,
          contact_info: contactInfo[0],
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!data) {
    return <div>Error loading data!</div>;
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
    { name: "Contáctanos", route: "/contact" },
    { name: "Conocenos", route: "/aboutus" },
  ];

  const navItemsWithStatic = [
    staticNavItems[0],
    staticNavItems[2],
    ...navItemsDynamic,
    staticNavItems[1],
  ];
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          src="/img/banner.png"
          navItems={navItemsWithStatic}
        />
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
                contact_info={data.contact_info}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactPage contact_info={data.contact_info} />}
          />
          <Route
            path="/aboutus"
            element={<AboutUsPage footer_info={data.contact_info} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
