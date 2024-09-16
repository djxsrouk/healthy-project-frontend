import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchProducts = createAsyncThunk(
  'diary/searchProducts',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/products/search?query=${query}`, {
        headers: {
          'Cache-Control': 'no-cache',  // Prevent client-side caching
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: [],
  searchResults: [],
  selectedDate: new Date().toISOString(),
  loading: false,
  error: null,
};


const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(searchProducts.pending, (state) => {
      state.loading = true;  // Set loading to true when search starts
    })
    .addCase(searchProducts.fulfilled, (state, action) => {
      state.loading = false;  // Set loading to false when search is complete
      state.searchResults = action.payload;
    })
    .addCase(searchProducts.rejected, (state, action) => {
      state.loading = false;  // Set loading to false on error
      state.error = action.payload || "Failed to fetch products";
    });
}
});

export const { addProduct, removeProduct, setDate } = diarySlice.actions;
export default diarySlice.reducer;
