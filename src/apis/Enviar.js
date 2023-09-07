export const Enviar = (datos) => {
  console.log(datos);

  fetch("http://localhost:3001/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo enviar el dato al servidor.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error al enviar el dato al servidor:", error);
    });
};
