import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  title: string;
  amount: string;
  dateSelect: string;
}

interface todoState {
  items: Todo[];
}

const initialState: todoState = { items: [] };

const ItemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id, title, amount, dateSelect } = action.payload;
      const Item = state.items.find(i => i.id === id);
      if (Item) Item.title = title;
      if (Item) Item.amount = amount;
      if (Item) Item.dateSelect = dateSelect;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = ItemSlice.actions;
export default ItemSlice.reducer;
