import React from "react";

function Item({ titulo, descripcion, precio }) {
  return (
    <div className="w-[30rem] h-48 bg-white rounded-lg">
      <div className="flex flex-row p-4 gap-4">
        <img
          src="Pannegro.png"
          className=" w-40 h-40 object-cover rounded-lg shrink-0"
        />
        <div className="flex flex-col justify-between w-full">
          <div>
            <p className="font-bold text-xl">{titulo}</p>
            <p>{descripcion}</p>
          </div>
          <div className="flex flex-row justify-between ">
            <p className="font-bold text-3xl">{precio}</p>
            <div className="rounded-lg px-4 py-2 text-white bg-[#8c6c4d] cursor-pointer">
              <p>Agregar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
