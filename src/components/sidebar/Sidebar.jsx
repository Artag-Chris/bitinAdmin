import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logOut } from "../../redux/apiCalls";


export default function Sidebar() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    logOut();
  };
  return (
    <div className="sidebar d-none d-sm-block">
      <div className="sidebarWrapper d-none d-sm-block">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Gestion de Usuarios
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Gestion de  Datos
              </li>
            </Link>
            <Link to="/reports" className="link">
              <li className="sidebarListItem">
                <BarChart className="sidebarIcon" />
                Consulta de Reportes
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificaciones</h3>
          <ul className="sidebarList">
            <Link to="/mail" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Correo
              </li>
            </Link>
            <Link to="/feedback" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
            </Link>
            <Link to="/chat" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Mensajes
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem" onClick={handleClick}>
              <Report className="sidebarIcon" />
              <Link to="/login" className="link">
              Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
