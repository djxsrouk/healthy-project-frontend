import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, searchProducts } from "../../redux/diarySlice";
import API_PRODUCTS from "../../API/apiProducts";

const DiaryAddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [grams, setGrams] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.diary.searchResults);
  const loading = useSelector((state) => state.diary.loading);

  useEffect(() => {
    if (productName.length > 2) {
      API_PRODUCTS.get(`/search?query=${productName}`)
        .then((response) => {
          console.log("Search results:", response.data);
          dispatch(searchProducts(response.data));
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, [productName, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedProduct && grams > 0) {
      dispatch(addProduct({ ...selectedProduct, grams: parseFloat(grams) }));
      setProductName("");
      setGrams("");
      setSelectedProduct(null);
    } else {
      alert("Please select a product and enter a valid grams amount.");
    }
  };

  const handleProductSelect = (product) => {
    console.log("Selected product:", product);
    setSelectedProduct(product);
    setProductName(product.name);
    setGrams("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a product to your daily list:</h3>
      <input
        type="text"
        placeholder="Search for a product"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      {loading && <p>Loading products...</p>}
      {Array.isArray(searchResults) && searchResults.length > 0 && (
        <ul>
          {searchResults.map((product) => (
            <li key={product.id} onClick={() => handleProductSelect(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      )}
      {selectedProduct && (
        <>
          <input
            type="number"
            placeholder="Enter grams"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            required
          />
          <button type="submit">Add Product</button>
        </>
      )}
    </form>
  );
};

export default DiaryAddProductForm;
