import "./App.css";

import {
  src_logo_header,
  navItems_info,
  carouselItems_info,
} from "./utils/variables";

import Header from "./components/organism/header/header";
import CarouselSection from "./components/organism/carouselSection/carouselSection";
import Card from "./components/molecules/card/card";
import Container from 'react-bootstrap/Container';

// <Card type="product"/>

function App() {
  return (
    <div className="App">
      <Header src={src_logo_header} navItems={navItems_info} />
      <CarouselSection carouselItems={carouselItems_info} />
      <Container>
      

      </Container>

    </div>
  );
}

export default App;
