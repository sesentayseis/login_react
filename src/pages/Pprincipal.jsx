import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const url = "http://192.168.31.1:3000/usuarios"; //esto es para jalar el valor
const cookies = new Cookies();
const Pprincipal = () => {
  //ingreso los datos envaidos por las cukis
  const [datos, setDatos] = useState({ id: `${cookies.get("id")}`, name: `${cookies.get("name")}`, });

  useEffect(() => {
    const jname = async () => {
      //http://192.168.31.1:3000/usuarios?id=1&name=Angel
      await axios.get(url, { params: { id: datos.id, name: datos.email } })
        .then((response) => {
          return response.data;
        })
        .then((response) => {
          if (response.length > 0) {
            console.log("usuario existente ,Logeo correcto");
          } else {
            //si el usuario no se registro no podra entrar
            console.log("no te logeaste gil ");
            window.location.href = "./";
          }
        });
    };
    jname();//se ejcuta la funcion
  }, [datos]);
  //---------------logica pa cerrar noma
  const cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("correo", { path: "/" });
    cookies.remove("password", { path: "/" });
    cookies.remove("tipo", { path: "/" });
    window.location.href = "./";
  };
  return (
    <Fragment>
      <nav>
        <button className="btn btn-danger" onClick={() => cerrarSesion()}>
          Cerrar sesion
        </button>
      </nav>

      <div>
        <p>Id : {cookies.get("id")}</p>
        <p>Nombre: {cookies.get("correo")}</p>
        <p>Correo: {cookies.get("name")}</p>
        <p>Tipo: {cookies.get("tipo")}</p>
      </div>
    </Fragment>
  );
};

export default Pprincipal;
