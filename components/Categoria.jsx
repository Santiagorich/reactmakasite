import React from "react";
import Item from "./Item";

function Categoria({ titulo, items }) {
  return (
    <div>
      <h1 className="text-white text-xl font-bold mb-6">{titulo}</h1>
      {/* Grid of two columns */}
      <div className="grid grid-cols-2 h-screen w-full">
        {items.map((item) => (
          <Item
            key={item.id}
            titulo={item.titulo}
            precio={item.precio}
            descripcion={item.descripcion}
          ></Item>
        ))}
      </div>
    </div>
  );
}

export default Categoria;
