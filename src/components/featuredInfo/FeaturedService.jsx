import {useState} from 'react';
import "./featuredService.css";
import { servicioData,ordenData,detalleOrdenData } from '../../dummyDataServicio';

function FeaturedService() {
    const [servicio,setServicio] = useState("");
    
    const handleChange = (e) => {
        setServicio(e.target.value);
        console.log(servicio);
    }
    
    return (
        <div>
            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Seleccione Reporte</h1>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle back--rosa" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Reporte
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item"  onChange={(e)=>handleChange(e)}>Servicio</a></li>
                    <li><a className="dropdown-item" value={"2"} onChange={(e)=>handleChange(e)}>Orden</a></li>
                    <li><a className="dropdown-item" value={"3"} >Detalle de orden</a></li>
                </ul>
            </div>
        </div>);
}

export default FeaturedService;
