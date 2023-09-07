import React, { useEffect, useState } from "react";
import { ObtenerID } from "../apis/ObtenerID";
import { Link } from "react-router-dom";

export const PaginaObtenerID = () => {
  const [cedulaOb, setCedulaOb] = useState();
  const { dataID } = ObtenerID(cedulaOb);

  useEffect(() => {
    if (dataID) {
      console.log(dataID);
    }
  }, [dataID]);

  const buscarCedula = (e) => {
    setCedulaOb(e.target.value);
  };

  return (
    <div>
      <div
        style={{ width: "10cm", margin: "0.5cm" }}
        className="input-group mb-3"
      >
        <input
          type="number"
          class="form-control"
          placeholder="Cedula"
          onChange={(e) => buscarCedula(e)}
        />
      </div>

      {dataID ? (
        <div className="card" style={{ width: "18rem", margin: "0.5cm" }}>
          <h5 className="card-title">{dataID.paciente}</h5>
          <p className="card-text">Cédula: {dataID.cedula}</p>
          <p className="card-text">Médico: {dataID.medico}</p>
          <p className="card-text">Fecha: {dataID.fecha}</p>
          <p className="card-text">Estado: {dataID.estado}</p>
        </div>
      ) : (
        <p>No se encontraron datos para el ID especificado.</p>
      )}
      <button style={{margin: "0.5cm"}} class="btn btn-outline-secondary" type="button">
        <Link style={{ textDecoration: "none" }} to="/*">
          Volver
        </Link>
      </button>
    </div>
  );
};
