import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/pets', pet);
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/pets/${id}`);
      return id;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
