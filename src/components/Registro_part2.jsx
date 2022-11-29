import React, { Fragment ,useState,useEffect} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
const Registro_part2 =( )=>{
    return(
      <Fragment>
      <div className="col-lg-6 d-flex align-items-center gradient-custom-3">
        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
        <div className="text-center">
          <h4 className="mb-4">Para hacer más eficiente tu vida y el transporte público</h4>
          <img
           
              src="./images/image.png"
              style={{ width: 300 }}
              alt="logo"
            />
        </div>
        </div>
      </div>
      </Fragment>
    );
}
export default Registro_part2;
