import React from 'react'
// import "./styles/app.css";
// import "./styles/header.css";
// import "./styles/VendorSignIn.css";
import VendorSignIn from './components/VendorSign';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { Header } from './components/Header'
// import VendorSignIn from './components/VendorSign';

const App = () => {
//   return <>
//   {/* <Header /> */}
//   </>
// }

// export default App
return (
  <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<VendorSignIn/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
