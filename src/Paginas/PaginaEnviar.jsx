import React, { useState } from "react";
import { Enviar } from "../apis/Enviar";
import { Link } from "react-router-dom";

export const PaginaEnviar = () => {
  const [datos, setDatos] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const enviarDatosAlServidor = () => {
    console.log(datos);
    Enviar(datos);
  };

  return (
    <>
      <div style={{ margin: "0.5cm" }}>
        <input
          type="text"
          name="paciente"
          placeholder="www"
          value={datos.paciente}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cedula"
          placeholder="222"
          value={datos.cedula}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="medico"
          placeholder="www"
          value={datos.medico}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fecha"
          placeholder="2023-09-12"
          value={datos.fecha}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="estado"
          placeholder="www"
          value={datos.estado}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ margin: "0.5cm" }}>
        <button class="btn btn-outline-secondary" type="button">
          <Link style={{ textDecoration: "none" }} to="/*">
            Volver
          </Link>
        </button>
        <button className="btn btn-warning" onClick={enviarDatosAlServidor}>
          Enviar Datos
        </button>
      </div>
    </>
  );
};
