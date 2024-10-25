import React, { useState } from "react";
import Image from "react-bootstrap/Image";

import "./AdImage.scss";

const AdImage = ({ src, ad_className }) => {
  const [primarySrc, setPrimarySrc] = useState(src);

  const handleError = () => {
    setPrimarySrc("https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/altv2");
  };

  return (
    <div>
      <Image
        src={primarySrc}
        alt="Imagen"
        onError={handleError}
        className={ad_className}
        fluid
      />
    </div>
  );
};

export default AdImage;
