import React from 'react';

function DetalleOrden({eps, direccionEps, copago, CiclosTotales, CiclosActuales, FechaEsperadaEntrega, FechaEntrega, Celular, Direccion, numeroOrden}) {
    var eps = eps? eps : "";
    var direccionEps = direccionEps? direccionEps : "";
    var copago = copago? copago : "";
    var CiclosTotales = CiclosTotales? CiclosTotales : "";
    var CiclosActuales = CiclosActuales? CiclosActuales : "";
    var FechaEsperadaEntrega = FechaEsperadaEntrega? FechaEsperadaEntrega : "";
    var FechaEntrega = FechaEntrega? FechaEntrega : "";
    var Celular = Celular? Celular : "";
    var Direccion = Direccion? Direccion : "";
    var numeroOrden = numeroOrden? numeroOrden : "";

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Detalles de la Orden</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <h2 className="newUserTitle">{eps} Dirección : {direccionEps} </h2>
            <form className="newUserForm">
                <div className="newUserItem">
                    <h3>Numero de la Orden : {numeroOrden} </h3> 
                </div>
                <div className="newUserItem">
                    <h3>Ciclos : {CiclosTotales} de {CiclosActuales} </h3>
                </div>
                <div className="newUserItem">
                    <label>Profesional A Cargo</label>
                    <input type="text" placeholder="Dr pepito..." />
                </div>
                <div className="newUserItem">
                    <label>Diagnostico</label>
                    <input type="text" placeholder="Descripcion del Diagnostico" />
                </div>
                <div className="newUserItem">
                    <label>Medicamento</label>
                    <input type="text" placeholder="Nombre del Medicamento" />
                </div>
                <div className="newUserItem">
                    <label>Forma Farmaceutica</label>
                    <input type="text" placeholder="tabletas..." />
                </div>
                <div className="newUserItem">
                    <label>Cantidad</label>
                    <input type="number" placeholder="1" />
                </div>
                <div className="newUserItem">
                    <label>Tipo</label>
                    <input type="text" placeholder="Prescripcion" />
                </div>
                <div className="newUserItem">
                    <label>¿Requiere Autorizacion?</label>
                    <input type="text" placeholder="" />
                </div>
                <div className="newUserItem">
                    <label>Cie 10</label>
                    <input type="text" placeholder="Cie 10" />
                </div>
                <div className="newUserItem">
                    <label>Fecha Vencimiento de la Orden</label>
                    <input type="date" placeholder="" />
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

export default DetalleOrden;
