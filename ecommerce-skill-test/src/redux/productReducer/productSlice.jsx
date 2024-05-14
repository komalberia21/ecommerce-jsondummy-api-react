// productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getInitialStateAsync=createAsyncThunk("products/getInitialState",async(arg,thunkAPI)=>{
  thunkAPI.dispatch(fetchStart())
 try{
      const response = await fetch(
        "https://dummyjson.com/products"
      );
      //https:localhost:3000/products
      
      const data = await response.json();
      //console.log(data.products,"data")
      thunkAPI.dispatch(setInitialState(data.products));
      return data;
      }catch(e){
        fetcherror(e);
      console.log(e);
 }})
 const INITIALSTATE={
  items: [],
  status: "idle",
  error: null,
}
const productSlice = createSlice({
  name: "products",
 initialState:INITIALSTATE,
  reducers: {
    setInitialState: (state, action) => { 
      state.items = action.payload;
      state.status="success";
    },
    addProduct: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },
    
    editProduct:(state,action)=>{
      console.log(action);
      state.items=state.items.map((item)=>{
        return item.id===action.payload.id?action.payload:item;
      })
    },
    deleteProduct:(state, action) => {
      state.items = state.items.filter((item) => action.payload !== item.id);
    },
    fetchStart:(state)=>{
      state.status="Loading";
      console.log("start");
    },
    fetcherror:(state,action)=>{
      state.status="failed";
      state.error=action.payload
    }
  },
});

export const productActions=productSlice.actions;
export const{setInitialState,fetchStart,fetcherror}=productSlice.actions
export const productReducer= productSlice.reducer;













// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     console.log("inside slice");
//     const response = await fetch("http://localhost:3000/products");
//     const data=await response.json();
//     thunkAPI.dispatch( setInitialState(data))
//     return await response.json();
//   }
// );

// extraReducers: (builder) => {
//   builder
//     .addCase(getInitialStateAsync.pending, (state) => {
//       state.status = "loading";
//     })
//     .addCase(getInitialStateAsync.fulfilled, (state, action) => {
//       state.status = "succeeded";
//       state.items = action.payload;
//     })
//     .addCase(getInitialStateAsync.rejected, (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     });
//}