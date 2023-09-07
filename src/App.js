import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaObtener } from "./Paginas/PaginaObtener";
import { PaginaObtenerID } from "./Paginas/PaginaObtenerID";
import { PaginaEnviar } from "./Paginas/PaginaEnviar";
import { PaginaEliminar } from "./Paginas/PaginaEliminar";
import { PaginaEditar } from "./Paginas/PaginaEditar";
import Sidebar from "./Paginas/Sidebar";
import Principal from "./Paginas/Principal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar></Sidebar>
          <Routes>
            <Route path="/*" index element={<Principal />} />
            <Route path="obtener" element={<PaginaObtener />} />
            <Route path="obtenerID" element={<PaginaObtenerID />} />
            <Route path="Enviar" element={<PaginaEnviar />} />
            <Route path="Editar" element={<PaginaEditar />} />
            <Route path="Eliminar" element={<PaginaEliminar />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
