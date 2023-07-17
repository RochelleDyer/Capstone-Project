import { createSlice } from '@reduxjs/toolkit'

const metalrootSlice = createSlice ({
    name: 'root',
    initialState: {
        metalsong_title: 'Title',
        metalartist: 'Artist',
        metalalbum: 'Album',
        metalyear: 'Year',
    },
    reducers: {
        choosemetalsong_title: (state, action) => {state.metalsong_title = action.payload},
        choosemetalartist: (state, action) => {state.metalartist = action.payload},
        choosemetalalbum: (state, action) => {state.metalalbum = action.payload},
        choosemetalyear: (state, action) => {state.metalyear = action.payload},
        
    }
})

export const reducer = metalrootSlice.reducer;
export const {choosemetalsong_title, choosemetalartist, choosemetalalbum, choosemetalyear} = metalrootSlice.actions