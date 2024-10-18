import "./App.css";

import {
  src_logo_header,
  navItems_info,
  carouselItems_info,
  products_info,
  lines_info
} from "./utils/variables";

import Header from "./components/organism/header/header";
import CarouselSection from "./components/organism/carouselSection/carouselSection";
import ProductsSection from "./components/organism/productsSection/productsSection";
import LinesSection from "./components/organism/linesSection/linesSection";

function App() {
  return (
    <div className="App">
      <Header src={src_logo_header} navItems={navItems_info} />
      <CarouselSection carouselItems={carouselItems_info} />
      <ProductsSection products={products_info} />
      <LinesSection lines={lines_info}/>
    </div>
  );
}

export default App;
