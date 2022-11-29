import React, { Fragment } from "react";
import Registro_part1 from "../components/Registro_part1";
import Registro_part2 from "../components/Registro_part2";
import '../css/Style_login.css';
  

const Registro =()=>{
    
    
  return(
<Fragment>
    <section className="h-100 gradient-form" /*style={{ backgroundColor: "#eee" }}*/>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
            <Registro_part2/>    
            <Registro_part1/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</Fragment>
  );
}
export default Registro;
