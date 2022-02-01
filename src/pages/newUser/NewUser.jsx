import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./newUser.css";

export default function NewUser() {
  return (
    <div>
      <Topbar />
      <div className="container">

        <Sidebar />
        <div className="newUser">
          <h1 className="newUserTitle">Nuevo Usuario</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Username</label>
              <input type="text" placeholder="Pepito Perez" />
            </div>
            <div className="newUserItem">
              <label>Nombres</label>
              <input type="text" placeholder="Pepito" />
            </div>
            <div className="newUserItem">
              <label>Apellidos</label>
              <input type="text" placeholder="Perez" />
            </div>
            <div className="newUserItem">
              <label>Cedula</label>
              <input type="text" placeholder="# de Cedula" />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder="john@gmail.com" />
            </div>
            <div className="newUserItem">
              <label>Fecha de Nacimiento</label>
              <input type="date" placeholder="" />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
              <label>Celular</label>
              <input type="text" placeholder="32055555" />
            </div>
            <div className="newUserItem">
              <label>Direccion</label>
              <input type="text" placeholder="New York | USA" />
            </div>
            <div className="newUserItem">
              <label>Genero</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="Masculino" />
                <label for="male">Masculino</label>
                <input type="radio" name="gender" id="female" value="Femenino" />
                <label for="female">Femenino</label>
                <input type="radio" name="gender" id="other" value="Otro" />
                <label for="other">Otro</label>
              </div>
            </div>
            <div className="newUserItem">
              <label>Tipo de Usuario</label>
              <div className="newUserGender">
                <input type="radio" name="tipo_usuario" id="Admin" value="true" />
                <label for="male">Administrador</label>
                <input type="radio" name="tipo_usuario" id="Usuario" value="false" />
                <label for="female">Usuario</label>
                <input type="radio" name="tipo_usuario" id="trabajador" value="Otro" />
                <label for="other">Trabajador</label>
              </div>
            </div>
            <div className="newUserItem">
              <label>Activo</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="Si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="newUserItem">
              <label>Plan de Salud</label>
              <div className="newUserGender">
                <input type="radio" name="plan" id="id_plan1" value="valor1" />
                <label for="male">Plan 1</label>
                <input type="radio" name="plan" id="id_plan2" value="valor2" />
                <label for="female">Plan 2</label>
                <input type="radio" name="plan" id="id_plan3" value="valor3" />
                <label for="other">Plan 3</label>
              </div>
            </div>
            <button className="newUserButton">Crear</button>
          </form>
        </div>
      </div>
    </div>
        );
}