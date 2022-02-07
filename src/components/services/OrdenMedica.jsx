import React,{useState} from 'react';
import DetalleOrdenMedica from '../modalDetalle/DetalleOrdenMedica';

function OrdenMedica() {
    const[numeroOrden, setNumeroOrden] = useState("")
    const[profesional,setProfesional] = useState("")
    const[diagnostico,setDiagnostico] = useState("")
    const[tipoDeOrden,setTipoDeOrden] = useState("");
    const[fechaDeVencimiento,setFechaDeVencimiento] = useState("");
    const[fechaEsperadaEntrega, setFechaEsperadaEntrega] = useState("");
    const[fechaOrden,setFechaOrden] = useState("");
    const[cie_10,setCie_10] = useState("");
    

  return (
    <div className='mt-5'>
    <h1 className="newUserTitle">Nueva Orden Medica</h1>
    <form className="newUserForm">
        <div className="newUserItem">
            <label>Numero de la Orden</label>
            <input type="text" placeholder="numero Orden Medica" onChange={(e)=>setNumeroOrden(e.target.value)} />
        </div>
        <div className="newUserItem">
            <label>Profecional A Cargo</label>
            <input type="text" placeholder="Dr pepito" onChange={(e)=>setProfesional(e.target.value)} />
        </div>
        <div className="newUserItem">
            <label>Diagnostico</label>
            <input type="text" placeholder="Descripcion" onChange={(e)=>setDiagnostico(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Tipo de Orden</label>
            <input type="text" placeholder="" onChange={(e)=>setTipoDeOrden(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Cie 10</label>
            <input type="text" placeholder="# de ciclos finales" onChange={(e)=>setCie_10(e.target.value)} />
        </div>
        <div className="newUserItem">
            <label>Fecha en la Cual le entregaron la formula</label>
            <input type="date" placeholder="# del ciclo actual" onChange={(e)=>setFechaOrden(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Fecha esperada de entrega</label>
            <input type="date" placeholder="" onChange={(e)=>setFechaEsperadaEntrega(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Fecha Del Vencimiento de la Orden</label>
            <input type="date" placeholder="" onChange={(e)=>setFechaDeVencimiento(e.target.value)}/>
        </div>
        
        <div className='m-5'>
            <DetalleOrdenMedica numeroOrden={numeroOrden} profesional={profesional} diagnostico={diagnostico} tipoDeOrden={tipoDeOrden} 
            fechaOrden={fechaOrden} fechaDeVencimiento={fechaDeVencimiento} fechaEsperadaEntrega={fechaEsperadaEntrega} cie_10={cie_10} />
        <button type="button" class="newUserButton back--rosa" data-bs-toggle="modal" data-bs-target="#exampleModal">
           Enviar
        </button>
        </div>
    </form>
</div>
  );
}

export default OrdenMedica;
