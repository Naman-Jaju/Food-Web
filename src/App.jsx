import React from "react";
import Footer from "./Component/Footer/Footer.jsx";
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Signup from "./Component/Signup/Signup.jsx";
import Login from "./Component/Login/Login.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import Products from "./Component/Products/Products.jsx";
import Notfound from "./Component/Notfound/Notfound.jsx";
import Home from "./Pages/Home.jsx";


function App(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />    
        <Route path="/profile" element={<Profile/>} /> 
        <Route path="/not-found" element={<Notfound/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path= "/" element={<Home/>} />
         <Route path = "/*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    )
}
export default App;