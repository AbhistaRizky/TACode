// import './App.css';
// import Main from "./components/Main"

// function App() {

//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/home';
import Tutorial from './components/pages/tutorial';
import About from './components/pages/about';
// import Footer from './components/pages/footer';
import Error from './components/pages/error';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/Tutorial" exact element={<Tutorial />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
