import React, { useEffect, useState } from "react";

const Category = ({setCard}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  

  const categoryHandler = (category) =>{
    fetch(
      category === "all"
        ? "https://fakestoreapi.com/products/"
        : "category/" + category
    );
    fetch(
      category === "all"
        ? "https://fakestoreapi.com/products/"
        : "https://fakestoreapi.com/products/category/" + category
    )
      .then((res) => res.json())
      .then((json) => setCard(json));


  }


  return (
    <ul className="d-flex justify-content-evenly  py-5 mt-3 gap-5">
      <li onClick={()=> categoryHandler("all")} className="text-black hover:text-blue-700">Barcha Mahsulotlar</li>
      {categories.map((category, i) => (
        <li
          onClick={() => categoryHandler(category)}
          className="text-black"
          key={i}>
          {category}
        </li>
      ))}
    </ul>
  );
};
export default Category;
