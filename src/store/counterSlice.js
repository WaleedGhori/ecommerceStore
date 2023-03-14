import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    increment: (state, action) => {
      const product = action.payload;
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
    },
    decrement: (state, action) =>{
      const product = action.payload
      console.log("decere",product);
      // check the item is exit or not
      const exit1 = state.find((x)=>x.id === product.id)
      if (exit1.qty ===1) {
        console.log("under if");
        return state.filter((x)=>x.id!==exit1.id)
      }
      else{
        return state.map((x)=>x.id === product.id?{...x,qty:x.qty-1}:x)
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer