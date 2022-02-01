import { useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";


export default function WidgetSm() {
  //se debe hacer un map de la dummy data para que se pueda hacer una busqueda dinamica
  const [data, setData] = useState(userRows);
 
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Miembros</span>
      <ul className="widgetSmList">
        {data.map((user,index) => ( 

        <li className="widgetSmListItem" key={index} >
          <img
            src={user.avatar}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username} </span>
            <span className="widgetSmUserTitle">Secretaria</span>
          </div>
          <button className="widgetSmButton widgetSmIcon">
            <Link to={`/user/${user.id}`}>
            <Visibility className="widgetSmIcon" />
            Display
            </Link>
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}