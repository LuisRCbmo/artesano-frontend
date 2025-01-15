import React, { useState } from "react";
import Image from "react-bootstrap/Image";

import "./AdImage.scss";

const AdImage = ({ src, ad_className }) => {
  const [primarySrc, setPrimarySrc] = useState(src);

  const handleError = () => {
    setPrimarySrc("/img/placeholder.png");
  };

  return (
    <div>
      <Image
        src={primarySrc}
        alt="placehplder"
        onError={handleError}
        className={ad_className}
        fluid
      />
    </div>
  );
};

export default AdImage;
