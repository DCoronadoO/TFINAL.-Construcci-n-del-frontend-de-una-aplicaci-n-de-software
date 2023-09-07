import React, { useEffect, useState } from 'react';

export const Obtener = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/get')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  return { data };
};
