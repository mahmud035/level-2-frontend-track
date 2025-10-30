import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CounterStateType = {
  count: number;
  boxCount: number;
};

const initialState: CounterStateType = {
  count: 0,
  boxCount: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;

      if (state.count % 5 === 0) {
        state.boxCount = state.boxCount + 1;
      }
    },
    decrement: (state) => {
      if (state.count === 0) {
        alert(`Negative value isn't allowed!`);
        return state;
      }

      if (state.count % 5 === 0) {
        state.boxCount = state.boxCount - 1;
      }

      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;

      if (state.count % 5 === 0 || state.count % 5 >= 1) {
        state.boxCount = state.boxCount + 1;
      }
    },
    decrementByAmount: (state, action) => {
      if (state.count < action.payload.value) {
        alert(`Negative value isn't allowed!`);
        return state;
      }

      if (state.count % 5 === 0 || state.count % 5 >= 1) {
        state.boxCount = state.boxCount - 1;
      }
      state.count = state.count - action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
