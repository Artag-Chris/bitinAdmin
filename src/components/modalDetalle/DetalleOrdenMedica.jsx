import React,{useState} from 'react';

function DetalleOrdenMedica({numeroOrden, profesional, diagnostico, tipoDeOrden, fechaOrden, fechaDeVencimiento, fechaEsperadaEntrega, cie_10}) {
    numeroOrden = numeroOrden || "";
    profesional = profesional || "";
    diagnostico = diagnostico || "";
    tipoDeOrden = tipoDeOrden || "";
    fechaOrden = fechaOrden || "";
    fechaDeVencimiento = fechaDeVencimiento || "";
    fechaEsperadaEntrega = fechaEsperadaEntrega || "";
    cie_10 = cie_10 || "";
    const[nombreMedicamento,setNombreMedicamento] = useState("");
    const[cantidad,setCantidad] = useState("");
    const[formaFarmaceutica,setFormaFarmaceutica] = useState("");
    const[autorizacion,setAutorizacion] = useState("");
    const[tipo,setTipo] = useState("");

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detalles de la Orden</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h2 className="newUserTitle">Numero de la Orden medica : {numeroOrden} </h2>
                        <form className="newUserForm">
                            <div className="newUserItem">
                                <h3>Profesional  : {profesional} </h3>
                            </div>
                            <div className="newUserItem">
                                <h3>tipo de orden : {tipoDeOrden} </h3>
                            </div>
                            <div className="newUserItem">
                                <label>Nombre Del Medicamento</label>
                                <input type="text" placeholder="Acetamenufen 500mg" onChange={(e)=>setNombreMedicamento(e.target.value)}/>
                            </div>
                            <div className="newUserItem">
                                <label>Forma Farmaceutica</label>
                                <input type="text" placeholder="tabletas..." onChange={(e)=>setFormaFarmaceutica(e.target.value)}/>
                            </div>
                            <div className="newUserItem">
                                <label>Cantidad</label>
                                <input type="number" placeholder="1" onChange={(e)=>setCantidad(e.target.value)}/>
                            </div>
                            <div className="newUserItem">
                                <label>Tipo</label>
                                <input type="text" placeholder="Prescripcion" onChange={(e)=>setTipo(e.target.value)} />
                            </div>
                            <div className="newUserItem">
                                <label>¿Requiere Autorizacion? </label>
                                <input type="text" placeholder="" onChange={(e)=>setAutorizacion(e.target.value)} />
                            </div>
                           
                            <div className="newUserItem">
                                <p>Fecha Vencimiento de la Orden : {fechaDeVencimiento} </p>
                                
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar Datos</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetalleOrdenMedica;
