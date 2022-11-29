import React, { Fragment ,useState,useEffect} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";

const url="http://192.168.31.1:3000/usuarios";
const cookies=new Cookies();
const Registro_part1 =( )=>{
  const[datos,setDatos]=useState({
    id:0,
    name:'',
    email:'',
    password:'',
    tipo:'U',
  })

  const handleInputChange=(e)=>{
    
     setDatos({
      ...datos,
      [e.target.name]  :e.target.value
    })
  }
  const EnviarDatos  =  (e)=>{
    e.preventDefault();
  }
  const registrarUsuario=async()=>{
    let lista=[]
    await axios.get(url)
    .then(response=>{
      return response.data;
    })
    .then(response=>{       
      //----------------------------------codigo para hacer una lista de todos los ids
      for (let step = 0; step <(response.length); step++) {
        
        var res=response[step];
        cookies.set('id',res.id,{path:"/"})        
        lista.push(res.id);        
      }
      //----------------------------------con esto nos informamos del mayor id
      
      
    })
    .catch(error=>{
      console.log(error)
    })
    
    //------------------------------------------------------------
    let idMayor=Math.max(...lista)  
      
    console.log("Nuevo id: "+(datos.id+idMayor+1)+
    "\nname: "+datos.name+
    "\nemail: "+datos.email+
    "\npasswprd: "+datos.password+
    "\ntipo: "+datos.tipo)
  }

  
  
    return(
        <Fragment>
            <div className="col-lg-6">
        <div className="card-body p-md-5 mx-md-4">
        
          <div className="text-center">
          <h2 className="mt-1 mb-5 pb-1" style={{ color: "#33ccff" }}>Registro</h2>                        
          </div>
          <form onSubmit={EnviarDatos}>
            <p>Por favor, ingrese sus datos</p>
            <div className="form-outline mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre completo"
                name="name"
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="form2Example11">
              Ingresa tu nombre
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Dirección de correo electrónico"
                name="email"
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="form2Example11">
              Ingresa tu correo
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"                
                className="form-control"
                name="password"
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="form2Example22">
              Clave
              </label>
            </div>
            <div className="text-center pt-1 mb-5 pb-1">
              <button
                className="btn btn-primary btn-block fa-lg gradient-custom-3 mb-3"
                type="Submit"
                 onClick={()=>registrarUsuario()}
              >
                Registrar
              </button>
              
            </div>
            <div className="d-flex align-items-center justify-content-center pb-4">
              <Link to={"/"}>
              <button type="button" className="btn btn-outline-danger">
                Cancelar
              </button>
              </Link>
              
            </div>
          </form>
        </div>
      </div>
        </Fragment>
    );
}
export default Registro_part1;
