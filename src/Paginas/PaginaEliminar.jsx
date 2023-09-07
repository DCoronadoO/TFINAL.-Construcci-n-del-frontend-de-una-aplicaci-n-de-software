import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PaginaEliminar = () => {
  const [cedulaOb, setCedulaOb] = useState();

  const buscarCedula = (e) => {
    setCedulaOb(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/delete/${cedulaOb}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("No se pudo eliminar el registro.");
        }

        const data = await response.json();
        console.log("Registro eliminado:", data);
      } catch (error) {
        console.error("Error al eliminar el registro:", error);
      }
    };

    fetchData();
  }, [cedulaOb]);

  return (
    <div>
      <div
        style={{ width: "10cm", margin: "0.5cm" }}
        className="input-group mb-3"
      >
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Cedula"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => buscarCedula(e)}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={() => console.log("Eliminar registro con ID", cedulaOb)}
            >
              Eliminar Registro
            </button>
          </div>
        </div>
      </div>
      <button style={{margin: "0.5cm"}} class="btn btn-outline-secondary" type="button">
        <Link style={{ textDecoration: "none" }} to="/*">
          Volver
        </Link>
      </button>
    </div>
  );
};
