import './App.css';

import { src_logo_header, navItems_info } from './utils/variables'; 


import Header from './components/organism/header/header';

function App() {
  return (
    <div className="App">
      <Header src={src_logo_header} navItems={navItems_info}/>
    </div>
  );
}

export default App;
