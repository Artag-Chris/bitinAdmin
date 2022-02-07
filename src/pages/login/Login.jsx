import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import hello from "./hello.svg";
import "./styled.css"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className=""
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

      }}>
      <div className="img-container">
        <img src={hello} className="img-fluid" alt="img-fluid" />
      </div>
      <label for="exampleFormControlInput1" className="form-label">E-Mail</label>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        className="btn-outline-primary"
        type="email"
        placeholder="Correo electrónico"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label for="exampleFormControlInput1" className="form-label ">Password</label>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        className="btn-outline-primary"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="btn-group row">
        <button type="button" onClick={handleClick} className="btn  col " >
          <Link to="/" className="text-decoration-none color--rosa">Login</Link>

        </button>
        <button type="button" onClick={handleClick} className="btn  mt-1" >
          <Link to="/newregister" className="text-decoration-none color--rosa">Registro </Link>
        </button>
      </div>

    </div>
  );
};

export default Login;
