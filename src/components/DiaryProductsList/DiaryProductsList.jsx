import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/diarySlice";

const DiaryProductsList = () => {
  const products = useSelector((state) => state.diary.products);
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.calories} kcal
          <button onClick={() => dispatch(removeProduct(product.id))}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DiaryProductsList;
