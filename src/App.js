import "./App.css";

import {
  src_logo_header,
  navItems_info,
  carouselItems_info,
} from "./utils/variables";

import Header from "./components/organism/header/header";
import Container from "react-bootstrap/Container";
import CarouselSection from "./components/organism/carouselSection/carouselSection";

function App() {
  return (
    <div className="App">
      <Header src={src_logo_header} navItems={navItems_info} />
      <Container>
        <CarouselSection carouselItems={carouselItems_info} />
      </Container>
    </div>
  );
}

export default App;
