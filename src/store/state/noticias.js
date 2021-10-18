import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setNoticias = createAsyncThunk("SET_NOTICIAS", () => {
  return axios
    .get("http://localhost:4000/api/noticias")
    .then((r) => r.data);
});
const noticiasReducer = createReducer([], {
  [setNoticias.fulfilled]: (state, action) => action.payload,
});

export default noticiasReducer;
