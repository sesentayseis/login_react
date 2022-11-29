import React, { Fragment ,useState,useEffect} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom"


//const url="https://apifinalbd.onrender.com/usuario";
const url="http://192.168.31.1:3000/usuarios";
const cookies=new Cookies();

const Login_part1 =( )=>{
   
  const[datos,setDatos]=useState({
    email:'',
    password:''
  })

  const handleInputChange=(e)=>{
    
     setDatos({
      ...datos,
      [e.target.name]  :e.target.value
    })
  }
  const EnviarDatos  =  (e)=>{
      e.preventDefault();
      console.log("Correo: "+datos.email+" --- Contraseña: "+datos.password)
  }
  const iniciarSesion=async()=>{
    //https://apifinalbd.onrender.com/usuario?correo=carlos&password=123456
     await axios.get(url,{params:{correo:datos.email,password:datos.password}})
     .then(response=>{
      return response.data
    })
    .then(response=>{
      if(response.length>0){
          var res=response[0];
          cookies.set('id',res.id,{path:"/"})
          cookies.set('name',res.name,{path:"/"})
          cookies.set('correo',res.correo,{path:"/"})
          cookies.set('password',res.password,{path:"/"})
          cookies.set('tipo',res.tipo,{path:"/"})
          alert(`Bienvenido ${res.name}--- tu correo es: ${res.correo} --- Eres tipo ${res.tipo}`)
          if(`${res.tipo}`=="U"){          
            window.location.href="./pprincipal";
          }else if(`${res.tipo}`=="P"){
            window.location.href="./padmin";
          }else{
            console.log("ta mal")
          }
      }else{
        alert('El usuario o la contraseña no son correctos')
      }
    })
    .catch(error=>{
      console.log(error)
    })
    
    
  }
  //nuevas coasillas para qeu vay a al login si no esta registrado   

  useEffect(()=>{
    if(cookies.get('name')){
      window.location.href="./pprincipal";
      alert('ya estas registrado')
    }
  },[datos])

    return (
      <Fragment>
      <div className="col-lg-6">
        <div className="card-body p-md-5 mx-md-4">
          <div className="text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Aiga_bus_on_red_circle.svg/1024px-Aiga_bus_on_red_circle.svg.png"
              style={{ width: 185 }}
              alt="logo"
            />
            <h4 className="mt-1 mb-5 pb-1" style={{ 
                color: "#b24723" 
                
                
         }}>Your Street</h4>
          </div>
          <form onSubmit={EnviarDatos}>
            <p>Por favor, ingrese a su cuenta</p>
            <div className="form-outline mb-4">
              <input
                type="email"
                
                className="form-control"
                placeholder="Dirección de correo electrónico"
                name="email"
                onChange={handleInputChange}
              />
              <label className="form-label" htmlFor="form2Example11">
              Nombre de usuario
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
                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                type="Submit"
                onClick={()=>iniciarSesion()}
              >
                Iniciar sesión
              </button>
              
            </div>
            <div className="d-flex align-items-center justify-content-center pb-4">
              <p className="mb-0 me-2">¿No tienes una cuenta?</p>
              <Link  to="/registro">
                <button href="/registro" type="button" className="btn btn-outline-danger">
                  Crear             
                </button>
              </Link>  
            </div>
          </form>
        </div>
      </div>
      </Fragment>
    );
  
}
export default Login_part1;
