import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/variable";

function Category() {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const res = await fetch(BASE_URL + "products/categories");
    const data = await res.json();

    setCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <h2>Kategori</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
