import React, { useState, useEffect } from "react";
import { ObtenerID } from "../apis/ObtenerID";
import { Link } from "react-router-dom";

export const PaginaEditar = () => {
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

  const [datosActualizados, setDatosActualizados] = useState({});
  const id = dataID?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosActualizados),
        });

        if (!response.ok) {
          throw new Error("No se pudo actualizar el registro.");
        }

        const data = await response.json();
        console.log("Registro actualizado:", data);
      } catch (error) {
        console.error("Error al actualizar el registro:", error);
      }
    };

    fetchData();
  }, [datosActualizados, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosActualizados({
      ...datosActualizados,
      [name]: value,
    });
  };

  return (
    <>
      <div>
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
        </div>
        <input
          type="text"
          name="paciente"
          placeholder="Nuevo paciente"
          value={datosActualizados.paciente || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cedula"
          placeholder="222"
          value={datosActualizados.cedula || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="medico"
          placeholder="www"
          value={datosActualizados.medico || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fecha"
          placeholder="2023-09-12"
          value={datosActualizados.fecha || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="estado"
          placeholder="www"
          value={datosActualizados.estado || ""}
          onChange={handleInputChange}
        />
        <button
          onClick={() => console.log("Actualizar datos", datosActualizados)}
        >
          Actualizar Registro
        </button>
      </div>
      <button
        style={{ margin: "0.5cm" }}
        class="btn btn-outline-secondary"
        type="button"
      >
        <Link style={{ textDecoration: "none" }} to="/*">
          Volver
        </Link>
      </button>
    </>
  );
};
