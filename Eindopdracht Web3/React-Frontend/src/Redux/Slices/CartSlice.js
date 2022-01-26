import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddToChart = (item) => async (dispatch, getState) => {
  const response = await axios({
    url: `http://localhost:4000/product/${item.id}`,
    method: "GET",
    responseType: "json",
  });
};

const CartSlice = createSlice({
  name: "producten",
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: {},
});

export const { reducer } = CartSlice;
