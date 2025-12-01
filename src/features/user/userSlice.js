import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../local/local";


export const userSlice = createSlice({
    name: 'userSlice',
    reducers:{
        initialState: () => ({
            user: getUserFromLocal(),
        }),
        setUser: (state,action) =>{
            state.user = action.payload;
            setUserToLocal(action.payload);
        },
    }
})


export const {setUser} = userSlice.actions;