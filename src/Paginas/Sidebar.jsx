import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "#E7E7E7" }}>
        <div style={{ width: "100%" }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            <Link style={{textDecoration: "none"}} to="/obtener">Lista de Pacientes</Link>
            <Link style={{textDecoration: "none"}} to="/obtenerID">Paciente</Link>
            <Link style={{textDecoration: "none"}} to="/Enviar">Crear Paciente</Link>
            <Link style={{textDecoration: "none"}} to="/Editar">Editar Paciente</Link>
            <Link style={{textDecoration: "none"}} to="/Eliminar">Eliminar Paciente</Link>
          </Box>
        </div>
      </div>
  )
}

export default Sidebar