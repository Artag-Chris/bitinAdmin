import React,{useState} from 'react';

function DetallarOrden() {
    const [numeroOrden,setNumeroOrden] = useState("")
    const[nombreMedicamento,setNombreMedicamento] = useState("")
    const[formaFarmaceutica,setFormaFarmaceutica] = useState("")
  return (
    <div className='mt-5'>
    <h1 className="newUserTitle">Detallar Orden Medica</h1>
    <form className="newUserForm">
        <div className="newUserItem"> 
            <label>Numero de la Orden</label>
            <input type="text" placeholder="numero Orden Medica" onChange={(e)=>setNumeroOrden(e.target.value)} />
        </div>
        <div className="newUserItem">
            <label>Nombre del Medicamento</label>
            <input type="text" placeholder="Acetamenufen 500mg" onChange={(e)=>setNombreMedicamento(e.target.value)} />
        </div>
        <div className="newUserItem">
            <label>Forma Farmaceutica</label>
            <input type="text" placeholder="Tabletas" onChange={(e)=>setFormaFarmaceutica(e.target.value)}/>
        </div>
        <div className="newUserItem">
            <label>Tipo de Orden</label>
            <input type="text" placeholder="" onChange={"(e)=>setTipoDeOrden(e.target.value)"}/>
        </div>
        <div className="newUserItem">
            <label>Cie 10</label>
            <input type="text" placeholder="# de ciclos finales" onChange={"(e)=>setCie_10(e.target.value)"} />
        </div>
        <div className="newUserItem">
            <label>Fecha en la Cual le entregaron la formula</label>
            <input type="date" placeholder="# del ciclo actual" onChange={"(e)=>setFechaOrden(e.target.value)"}/>
        </div>
        <div className="newUserItem">
            <label>Fecha esperada de entrega</label>
            <input type="date" placeholder="" onChange={"(e)=>setFechaEsperadaEntrega(e.target.value)"}/>
        </div>
        <div className="newUserItem">
            <label>Fecha Del Vencimiento de la Orden</label>
            <input type="date" placeholder="" onChange={"(e)=>setFechaDeVencimiento(e.target.value)"}/>
        </div>
        
        <div className='m-5'>
            
            
        <button type="button" class="newUserButton back--rosa">
           Enviar
        </button>
        </div>
    </form>
</div>
  );
}

export default DetallarOrden;
