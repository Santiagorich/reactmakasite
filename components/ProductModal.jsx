import React from "react";

const ProductModal = ({ isOpen, product, onClose }) => {
  if (!isOpen || !product) {
    return null; 
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded-lg w-1/4 h-1/2">
        <div className="flex justify-between items-start p-4 border-b">
          <button onClick={onClose} className="focus:outline-none">
            &times;
          </button>
          <img
            src="Pannegro.png"
            className="mx-auto my-4 w-40 h-40 object-cover rounded-lg"
            alt={product.titulo}
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">{product.titulo}</h3>
            <span className="text-lg mr-4">{product.precio}</span>
          </div>
          <p>{product.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
