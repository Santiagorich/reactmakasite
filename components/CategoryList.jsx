// CategoryList.js
import React from "react";

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <div className="w-1/4 bg-white">
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onSelectCategory(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
