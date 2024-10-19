import React from "react";

import { useParams } from "react-router-dom";


const DynamicCatalog = () => {
  const { lineTitle, productTitle } = useParams();

  return (
    <>
      <h1>Line: {lineTitle}</h1>
      <h2>Product: {productTitle}</h2>
    </>
  );
};

export default DynamicCatalog;
