import React from "react"
import {BrowserRouter, Routes,Route,Link} from "react-router-dom"
import Login from "../pages/Login";
import Padmin from "../pages/padmin";
import Pprincipal from "../pages/pprincipal";
import Registro from "../pages/Registro";
function Rutas() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<Login/>}/> 
        <Route  exact path="/padmin" element={<Padmin/>}/> 
        <Route  exact path="/pprincipal" element={<Pprincipal/>}/> 
        <Route  exact path="/registro" element={<Registro/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default  Rutas;
