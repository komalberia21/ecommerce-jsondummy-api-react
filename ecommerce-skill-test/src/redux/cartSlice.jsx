// cartsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getInitialStateAsync=createAsyncThunk("carts/getInitialState",async(arg,thunkAPI)=>{
  thunkAPI.dispatch(fetchStart())
 try{
    let cart = JSON.parse(localStorage.getItem("cart"));
     if(cart){
        thunkAPI.dispatch(setInitialState(cart));
      }
    }catch(e){
        fetcherror(e);
      console.log(e);
 }})

 const INITIALSTATE={
  cart: [],
  status: "idle",
  error: null,
}
const cartSlice = createSlice({
  name: "carts",
 initialState:INITIALSTATE,
  reducers: {
    setInitialState: (state, action) => { 
      state.cart = action.payload;
      state.status="success";

    },
    addTocart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      console.log(state.cart);
    },
    editcartInc: (state, action) => {
     const updatedCart = state.cart.map(item => {
        if (item.id == action.payload) {
          // If item exists in cart, increment its quantity
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      state.cart = updatedCart;
    },
    editcartDec:(state,action)=>{
      const updatedCart = state.cart.map(item => {
        if (item.id == action.payload) {
          // If item exists in cart, decrese its quantity
        return { ...item, quantity: item.quantity-1 };
        }
        return item;
      });
      state.cart = updatedCart;

    },
    deletecart:(state, action) => {
      state.cart = state.cart.filter((item) => action.payload !== item.id);
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

export const cartActions=cartSlice.actions;
export const{setInitialState,fetchStart,fetcherror,deletecart}=cartSlice.actions
export const cartReducer= cartSlice.reducer;






