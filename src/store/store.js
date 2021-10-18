import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import noticiasReducer from "./state/noticias";
import usuariosReducer from "./state/usuarios";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    noticias: noticiasReducer,
    usuarios: usuariosReducer,
  },
});

export default store;
