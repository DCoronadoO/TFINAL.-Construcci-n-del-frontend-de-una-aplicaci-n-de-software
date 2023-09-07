import React, { useEffect, useState } from 'react';

export const ObtenerID = (cedula) => {
  const [dataID, setDataID] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/get/${cedula}`)
      .then((response) => response.json())
      .then((result) => {
        setDataID(result);
      })
      .catch((error) => {
        console.error('Error al obtener datos por ID:', error);
      });
  }, [cedula]);

  return { dataID };
};
