import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemReducer from './slice/ItemSlice';

const persistConfig = { key: 'root', storage: AsyncStorage };
const persistedReducer = persistReducer(persistConfig, ItemReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefault => getDefault({ serializableCheck: false }),
});
export const persistedStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
