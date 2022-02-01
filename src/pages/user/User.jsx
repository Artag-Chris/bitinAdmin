import { useState, useEffect } from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./user.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function User() {
  const [user, setUser] = useState([
    {
      username: "", email: "", CELULAR: "", DIRECCION: "", avatar: "", FECHA_NACIMIENTO: "", NOMBRES: "", APELLIDOS: "",
      CEDULA: "", GENERO: "", ESTADO_CIVIL: "", PLAN_SALUD: "", TIPO_USUARIO: "", TIPO_SANGRE: "",
    },
  ]);
  const { id } = useParams();
  //organizar ruta dinamica



  useEffect(() => {
    const searchUser = userRows.filter((user) => user.id == id);
    console.log(searchUser[0]);
    setUser(searchUser[0]);
  }, []);




  return (
    <div>
      <Topbar />
      <div className="container">

        <Sidebar />

        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Editar Usuario</h1>
            <Link to="/newUser">
              <button className="userAddButton">Crear Usuario</button>
            </Link>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img
                  src={user.avatar}
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{user.username} </span>
                  <span className="userShowUserTitle">Profesion?</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Detalles de Cuenta</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.email} </span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.FECHA_NACIMIENTO} </span>
                </div>
                <span className="userShowTitle">Detalles de Contacto</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.CELULAR} </span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.email} </span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.DIRECCION} </span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder={user.username}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Nombres </label>
                    <input
                      type="text"
                      placeholder={user.NOMBRES}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Apellidos </label>
                    <input
                      type="text"
                      placeholder={user.APELLIDOS}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Genero </label>
                    <input
                      type="text"
                      placeholder={user.GENERO}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Plan  </label>
                    <input
                      type="text"
                      placeholder={user.PLAN_SALUD}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder={user.email}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Celular</label>
                    <input
                      type="text"
                      placeholder={user.CELULAR}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Direccion</label>
                    <input
                      type="text"
                      placeholder={user.DIRECCION}
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src={user.avatar}
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Actualizar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
}
