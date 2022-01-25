import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchProducten = createAsyncThunk("producten/fetch", async () => {
  const response = await axios({
    url: "http://localhost:4000/products",
    method: "GET",
  });
  return response;
});

const productenSlice = createSlice({
  name: "producten",
  initialState: {
    data: [],
    status: null,
    error: null,
  },

  extraReducers: {
    [FetchProducten.pending]: (state, action) => {
      return {
        ...state,
        status: "pending",
        data: [],
        error: null,
      };
    },

    [FetchProducten.fulfilled]: (state, action) => {
      return {
        ...state,
        status: "success",
        data: action.payload.data,
        error: null,
      };
    },

    [FetchProducten.rejected]: (state, action) => {
      return {
        ...state,
        status: "error",
        data: [],
        error: action.payload,
      };
    },
  },
});

export const { reducer } = productenSlice;
