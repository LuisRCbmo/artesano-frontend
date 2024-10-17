import './App.css';

import { src_logo_header, navItems_info } from './utils/variables'; 


import Header from './components/organism/header/header';
import Carousel from './components/molecules/carousel/carousel';

function App() {
  return (
    <div className="App">
      <Header src={src_logo_header} navItems={navItems_info}/>
      <Carousel/>
    </div>
  );
}

export default App;