import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import hello from "./hello.svg";

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
      <img  src={hello} className="img-fluid" alt="img-fluid" />
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
     
      <button type="button" onClick={handleClick} className="btn-lg btn-outline-primary">
        <Link to="/">Login</Link>
        
      </button>
      <button type="button"  onClick={handleClick} className="btn-lg btn-outline-primary mt-1 link">
        <Link to="/newregister">Registro </Link>
      </button>
      
    </div> 
  );
};

export default Login;
