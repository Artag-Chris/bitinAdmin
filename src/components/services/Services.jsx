import React, { useState } from 'react';
import DetalleOrden from '../modalServices/DetalleOrden';
import "./newUser.css";

function Services() {
    const [eps, setEps] = useState("");
    const [direccionEps, setDireccionEps] = useState("");
    const [copago, setCopago] = useState("");
    const [CiclosTotales, setCiclosTotales] = useState("");
    const [CiclosActuales, setCiclosActuales] = useState("");
    const [FechaEsperadaEntrega, setFechaEsperadaEntrega] = useState("");
    const [FechaEntrega, setFechaEntrega] = useState("");
    const [Celular, setCelular] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [numeroOrden, setNumeroOrden] = useState("");


    return (
        <div className=" mt-5 newUser  m-0 p-n5">
            <div className='newUser w-sm-100 w-md-50'>
                <h1 className="newUserTitle">Nuevo Servicio</h1>
                <form className="newUserForm ">
                    <div className="newUserItem ">
                        <label>Nombre de la Eps</label>
                        <input type="text" placeholder="Ejem: Nueva Eps" onChange={(e) => setEps(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Dirección Eps</label>
                        <input type="text" placeholder="Av 30 De Agosto 35-08" onChange={(e) => setDireccionEps(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Numero de la Orden Medica</label>
                        <input type="text" placeholder="200243000" onChange={(e) => setNumeroOrden(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Copago</label>
                        <input type="text" placeholder="Exento?" onChange={(e) => setCopago(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Ciclos Totales de la formula</label>
                        <input type="text" placeholder="# de ciclos finales" onChange={(e) => setCiclosTotales(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Numero del ciclo actual</label>
                        <input type="text" placeholder="# del ciclo actual" onChange={(e) => setCiclosActuales(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Fecha esperada de entrega</label>
                        <input type="date" placeholder="" onChange={(e) => setFechaEsperadaEntrega(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Fecha en la Cual le entregaron la formula</label>
                        <input type="date" placeholder="" onChange={(e) => setFechaEntrega(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Celular de Contacto</label>
                        <input type="text" placeholder="32055555" onChange={(e) => setCelular(e.target.value)} />
                    </div>
                    <div className="newUserItem">
                        <label>Direccion de entrega</label>
                        <input type="text" placeholder="Cuba " onChange={(e) => setDireccion(e.target.value)} />
                    </div>
                    <DetalleOrden eps={eps} direccionEps={direccionEps} copago={copago} CiclosTotales={CiclosTotales} CiclosActuales={CiclosActuales}
                        FechaEsperadaEntrega={FechaEsperadaEntrega} FechaEntrega={FechaEntrega} Celular={Celular} Direccion={Direccion} numeroOrden={numeroOrden} />
                    <div className='m-5'>
                        <button type="button" class="newUserButton back--rosa " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Enviar
                        </button>
                    </div>

                </form>
            </div>
        </div>);
}

export default Services;
