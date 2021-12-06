import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [libros, setLibros] = useState([
    { codigo: 1, titulo: "Programación", idioma: "ESP", desactivado: false },
    { codigo: 2, titulo: "Aprende Python", idioma: "ESP", desactivado: false },
    { codigo: 3, titulo: "Precálculo", idioma: "ESP", desactivado: false },
    {
      codigo: 4,
      titulo: "Ingenieria De Software",
      idioma: "ESP",
      desactivado: false,
    },
  ]);

  const [carrito, setCarrito] = useState([]);

  const modificarStatus = (libro) => {
    var index = libros.indexOf(libro);
    var indexCarrito = carrito.indexOf(libro);
    libro.desactivado = !libro.desactivado;
    libros.splice(index, 1, libro);
    setLibros([...libros]);
    if (libro.desactivado == true) {
      setCarrito([...carrito, libro]);
    } else {
      carrito.splice(indexCarrito,1);
      setCarrito([...carrito]);
    }
  };

  return (
    <AppContext.Provider
      value={{ libros, modificarStatus, carrito }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
