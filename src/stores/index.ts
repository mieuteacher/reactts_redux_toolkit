import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postReducer } from './slices/post.slice';

// Kết hợp reducer
const rootReducer = combineReducers({
  postStore: postReducer,
});

// Xuất ra type của RootStore
export type RootStore = ReturnType<typeof rootReducer>;

// tạo ra store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
