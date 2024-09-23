// import React, {  useState, createContext } from 'react'

// //pages directory

// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Gallery from  './pages/Gallery';
// // import About from './pages/About';
// import Resources from './pages/Resources';
// //Components directory
// import Header from './components/Header';
// // import Aboutus from './components/Aboutus';
// // import Skills from './components/Skills';
// // import Banner from './components/Banner';
// // import Experts from './components/Experts';
// // import Plans from './components/Plans';
// // import Contact1 from './components/Contact1';
// // import Footer from './components/Footer';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// export const ColorContext = createContext();//warehouse
// //usecontext()--contextapi

// function App() {
//   const[color,setColor] = useState("red");
//   return (
//     <div>

//       <Header />
//   <ColorContext.Provider value ={color}>
//       <Routes>
//        <Route index element = {<Home />} />
//        {/* <Route path='/About'   element = {<About />} /> */}
//        <Route path='/Resources' element = {<Resources/>} />
//        <Route path='/Gallery' element = {<Gallery/>} />
//        <Route path='/Contact' element = {<Contact/>} />
//       </Routes>
//       </ColorContext.Provider>
//       {/* <Banner/>
//      <Experts />
//      <Aboutus />
//      <Skills />
//      <Plans />
//      <Contact1 />
//      <Footer /> */}
//     </div>
//   )
// }

// export default App
import React, { useState, createContext } from "react";

// Pages directory
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
// import About from './pages/About';
// import Resources from './pages/Resources';
import Signin from "./pages/Signin"; // Importing the new SignIn page
import Signup from "./pages/Signup";
// Components directory
import Header from "./components/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// export const ColorContext = createContext(); // warehouse

function App() {
  return (
    <div>
      <title>Event_management system</title>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/About' element={<About />} /> */}
        {/* <Route path='/Resources' element={<Resources />} /> */}
        {/* <Route path='/Gallery' element={<Gallery />} /> */}
        <Route path="/signin" element={<Signin />} />{" "}
        {/* Adding the new SignIn route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
