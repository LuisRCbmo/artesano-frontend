import React from 'react'
import Button from 'react-bootstrap/Button';

import "./AdButton.scss";

const AdButton = ({content,onClick}) => {
  return (
    <Button className="ad-button" variant="outline-secondary" onClick={onClick}>{content}</Button>
  )
}

export default AdButton