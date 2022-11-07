import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
    times: 0,

  }, 
  reducers: {
    increment: ( state )  => {
      state.value += 1;
    },
    decrement: ( state ) => {
      state.counter -= 1;
    },
    incrementBy: ( state, action ) => {
      state.counter += action.payload
      // console.log(action)
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions

export default counterSlice.reducer