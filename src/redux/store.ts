import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User";
import todosReducer from "./features/ToDos";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
