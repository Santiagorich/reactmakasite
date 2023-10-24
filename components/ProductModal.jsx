import React from "react";

const ProductModal = ({ isOpen, product, options, onClose, onAdd }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg w-1/4 h-1/2">
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={onClose} className="focus:outline-none">
            &times;
          </button>
          <img
            src="Pannegro.png"
            className=" w-40 h-40 object-cover rounded-lg shrink-0"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">{product.titulo}</h3>
            <span className="text-lg">${product.price}</span>
          </div>
          <p>{product.descripcion}</p>
          {/* {options.map((option, idx) => (
            <div key={idx} className="mt-4">
              <button className="border p-2 w-full rounded text-left">
                {option.title}
              </button>
              <div className="mt-2 grid grid-cols-2 gap-4">
                {option.items.map((item, i) => (
                  <label key={i} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {item.name} (${item.price})
                  </label>
                ))}
              </div>
            </div>
          ))} */}
          {/* <div className="mt-4">
            <label htmlFor="note" className="block mb-2">
              Notas
            </label>
            <input
              type="text"
              id="note"
              placeholder="Alguna aclaración..."
              className="w-full p-2 border rounded"
            />
          </div> */}
        </div>
        {/* <div className="flex justify-between p-4 border-t">
          <div className="flex items-center">
            <button className="border p-2 rounded-l">-</button>
            <input
              type="number"
              className="border-t border-b text-center w-8"
              readOnly
              value="1"
            />
            <button className="border p-2 rounded-r">+</button>
          </div>
          <button
            onClick={onAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Agregar ${product.price}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductModal;
