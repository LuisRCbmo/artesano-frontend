import './App.css';

import Images from './components/atoms/images/images';
import Navbar from './components/molecules/navbars/navbar';

function App() {
  return (
    <div className="App">
      <Images src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/syasxv2nljavurgx0aqh"/>
      <Navbar/>
    </div>
  );
}

export default App;
