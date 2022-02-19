import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Reports from "./pages/reports/Reports";
import NewRegister from "./pages/newRegister/NewRegister";
import Solicitudes from "./pages/solicitudesAdmin/Solicitudes";

function App() {
  const isAdmin = false
  {/* const admin= useSelector((state) => state.user.currentUser.isAdmin)*/ }

  return (
    <Router>
      <Switch>


        <Router>
          <Route path="/newregister">
            <NewRegister />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Topbar />
            <div className="container">
              <Sidebar />
              <Home />
            </div>
          </Route>
          <Route path="/users">
            <Topbar />
            <div className="container">
              <Sidebar />
              <UserList />
            </div>
          </Route>
          <Route path="/user/:id">
            <Topbar />
            <div className="container">
              <Sidebar />
              <User />
            </div>
          </Route>
          <Route path="/newUser">
            <Topbar />
            <div className="container">
              <Sidebar />
              <NewUser />
            </div>
          </Route>
          <Route path="/reports">
            <Topbar />
            <div className="container">
              <Sidebar />
              <Reports />
            </div>
          </Route>
          <Route path="/solicitudes">
            <Topbar />
            <div className="container">
              <Sidebar />
              <Solicitudes />
            </div>
          </Route>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
