import React, { useEffect } from "react";
import { Obtener } from "../apis/Obtener";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const PaginaObtener = () => {
  const { data } = Obtener();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      {data && data.length > 0 ? (
        <Grid sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {data.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <div className="card" style={{ width: "18rem", margin: "0.5cm" }}>
                <h5 className="card-title">{item.paciente}</h5>
                <p className="card-text">{item.cedula}</p>
                <p className="card-text">{item.medico}</p>
                <p className="card-text">{item.fecha}</p>
                <p className="card-text">{item.estado}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No hay datos disponibles.</p>
      )}
      <button style={{margin: "0.5cm"}} class="btn btn-outline-secondary" type="button">
        <Link style={{ textDecoration: "none" }} to="/*">
          Volver
        </Link>
      </button>
    </div>
  );
};
