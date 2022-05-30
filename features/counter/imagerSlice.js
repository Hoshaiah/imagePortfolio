import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ImagePicker from 'expo-image-picker';

export const setImage = createAsyncThunk(
    'imager/setImage',
    async () => {
        console.log('setImageRan')
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        return pickerResult
    }
  )
export const imagerSlice = createSlice({
    name: 'imager',
    initialState: {
        selectedImage: null,
    },
    reducers: {
        unmountImage: (state) => {
            state.selectedImage = null
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(setImage.fulfilled, (state, action) => {
          // Add user to the state array
          state.selectedImage = action.payload
        })
    },
});

const { actions, reducer } = imagerSlice;
export const { mountImage, unmountImage } = actions
export default reducer;