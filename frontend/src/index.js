import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Router, Route} from "react-router-dom";   //remember this line
import HomePage from './Landing_Page/home/HomePage';
import Signup from "./Landing_Page/signup/Signup";
import About from "./Landing_Page/about/AboutPage";
import Pricing from './Landing_Page/pricing/PricingPage';
import ProductPage from './Landing_Page/products/ProductPage';
import Support from './Landing_Page/support/SupportPage';
import NavBar from './Landing_Page/Navbar';
import Footer from './Landing_Page/Footer';
import Notfound from './Landing_Page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <NavBar/>   {/*   since it is common in all pages we can put it here */}
 <Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/pricing" element={<Pricing/>}></Route>
  <Route path="/products" element={<ProductPage/>}></Route>
  <Route path="/support" element={<Support/>}></Route>
  <Route path="*" element={<Notfound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
);

