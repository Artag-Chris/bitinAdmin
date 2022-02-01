import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar container-lg  ">
      <div className="topbarWrapper container d-none d-sm-block d-flex justify-content-around ">
        <div className="topLeft ">
          <Link extact to="/" className="logo d-flex ">Bitin</Link>
        </div>
        <div className="topRight  container d- ">
          
          
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light d-block d-sm-none">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bitin</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/users" >Gestion Usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newUser" >Gestion de Nuevos usuarios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Gestion de Datos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reports">Gestion de Reportes</Link>
              </li>
              
            
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}