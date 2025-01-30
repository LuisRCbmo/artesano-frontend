import React, { useState } from "react";
import Image from "react-bootstrap/Image";

import "./AdImage.scss";

const AdImage = ({ src, ad_className }) => {

  return (
    <div>
      <Image
        src={src}
        alt="placeholder"
        className={ad_className}
        fluid
      />
    </div>
  );
};

export default AdImage;
