import { useState } from "react";
import Categoria from "../components/Categoria";
import Header from "../components/Header/Header";
import Item from "../components/Item";
import Menu from "../components/Menu/Menu";
import ProductModal from "../components/ProductModal";
import TopImage from "../components/TopImage/TopImage";
import ItemGrid from "./../components/ItemGrid/ItemGrid";


export default function Home() {
  //Random restaurant dishes with name and price

  // Read content/categories.json
  // const promos = items.filter((item) => item.promo === true)[0];
  const categories = {
    halloween: {
      titulo: "Edicion Halloween",
      items: [
        {
          id: 1,
          titulo: "Monstruosa 1.0",
          precio: "$489",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 2,
          titulo: "Frankie 1.0",
          precio: "$200",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 3,
          titulo: "Frankie 1.0",
          precio: "$500",
          descripcion: "Carne y pan",
        },
        {
          id: 4,
          titulo: "Monstruosa 1.0",
          precio: "$489",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 5,
          titulo: "Frankie 1.0",
          precio: "$200",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 6,
          titulo: "Frankie 1.0",
          precio: "$500",
          descripcion: "Carne y pan",
        },
      ],
    },
    vip: {
      titulo: "VIP Burger -Edición limitada-",
      items: [
        {
          id: 1,
          titulo: "Monstruosa 1.0",
          precio: "$489",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 2,
          titulo: "Frankie 1.0",
          precio: "$200",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 3,
          titulo: "Frankie 1.0",
          precio: "$500",
          descripcion: "Carne y pan",
        },
        {
          id: 4,
          titulo: "Monstruosa 1.0",
          precio: "$489",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 5,
          titulo: "Frankie 1.0",
          precio: "$200",
          descripcion:
            "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
        },
        {
          id: 6,
          titulo: "Frankie 1.0",
          precio: "$500",
          descripcion: "Carne y pan",
        },
      ],
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <ProductModal
      product={{
        id: 1,
        titulo: "Monstruosa 1.0",
        precio: "$489",
        descripcion:
          "Carne, queso cheddar, salsa cheddar, bacon, huevo y ketchup",
      }}
      isOpen={isOpen}
      />
      <Header></Header>
      <TopImage></TopImage>
      <div className="flex flex-row h-full">
        {/* Columna de categorias */}
        <div className="w-1/3" onClick={
          () => setIsOpen(!isOpen)
        }>
          TEST
        </div>
        {/* Menu */}
        <div className="bg-[#282b2e] h-max w-full p-4">
          <h1 className="text-white text-4xl mb-6">Nuestro Menú</h1>
          {/* Categorias */}
          <Categoria titulo={categories.halloween.titulo} items={categories.halloween.items} />
          <Categoria titulo={categories.vip.titulo} items={categories.vip.items} />
        </div>
      </div>
    </div>
  );
}
