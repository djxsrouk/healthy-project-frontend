// src/redux/actions.js

// Action to add a new product
export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

// Action to remove a product
export const removeProduct = (productId) => ({
  type: 'REMOVE_PRODUCT',
  payload: productId,
});

export const setDate = (date) => ({
  type: 'SET_DATE',
  payload: date,
});

