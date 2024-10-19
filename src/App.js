import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/organism/header/header";
import CarouselSection from "./components/organism/carouselSection/carouselSection";
import ProductsSection from "./components/organism/productsSection/productsSection";
import LinesSection from "./components/organism/linesSection/linesSection";
import Footer from "./components/organism/footer/footer";
import Spinner from "react-bootstrap/Spinner";

// Función para agrupar productos por línea y tipo
function groupByLineAndType(products) {
  const groupedData = {};

  products.forEach((product) => {
    const { line, type } = product;

    // Si "line" es un array (el producto pertenece a varias líneas)
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

// Función para obtener tipos únicos de productos
function getUniqueTypes(products) {
  const uniqueTypes = products.reduce((acc, product) => {
    if (!acc.some(item => item.type === product.type)) {
      acc.push({ src: product.src, type: product.type });
    }
    return acc;
  }, []);
  return uniqueTypes;
}

// Función para obtener líneas únicas de productos
function getUniqueLines(products) {
  const uniqueLines = products.reduce((acc, product) => {
    const linesArray = Array.isArray(product.line) ? product.line : [product.line];

    linesArray.forEach((line) => {
      if (!acc.some(item => item.line === line)) {
        acc.push({ src: product.src, line: line });
      }
    });

    return acc;
  }, []);

  return uniqueLines;
}

function App() {
  const [data, setData] = useState(null);

  // Cargar los datos de productos desde un archivo JSON
  useEffect(() => {
    fetch("/utils/variables.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Mostrar un spinner mientras los datos se cargan
  if (!data) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  // Agrupar productos por línea y tipo
  const groupedProducts = groupByLineAndType(data.products_info);

  // Obtener tipos únicos de productos
  const uniqueProductTypes = getUniqueTypes(data.products_info);

  // Obtener líneas únicas de productos
  const uniqueLines = getUniqueLines(data.products_info);

  // Estructura dinámica para los items del navbar
  const navItemsDynamic = Object.keys(groupedProducts).map((line) => ({
    title: line,  // El título del dropdown será el nombre de la línea
    items: groupedProducts[line].map((type) => ({ name: type, href: `#${type}` }))
  }));

  // Estructura de los items estáticos del navbar
  const staticNavItems = [
    { "name": "Inicio", "href": "#" },
    { "name": "Contáctanos", "href": "#" },
    { "name": "Conócenos", "href": "#" }
  ];

  // Combinar los items dinámicos y los estáticos
  const navItemsWithStatic = [
    staticNavItems[0], // "Inicio"
    ...navItemsDynamic, // Items dinámicos generados
    staticNavItems[1],  // "Contáctanos"
    staticNavItems[2]   // "Conócenos"
  ];

  return (
    <div className="App">
      {/* Pasar los items del navbar al componente Header */}
      <Header src={data.src_logo_header} navItems={navItemsWithStatic} />
      
      {/* Sección de carrusel */}
      <CarouselSection carouselItems={data.carouselItems_info} />
      
      {/* Sección de productos, mostrando tipos únicos */}
      <ProductsSection products={uniqueProductTypes} />
      
      {/* Sección de líneas, mostrando líneas únicas */}
      <LinesSection lines={uniqueLines} />
      
      {/* Footer */}
      <Footer footer_Info={data.footer_info} />
    </div>
  );
}

export default App;
