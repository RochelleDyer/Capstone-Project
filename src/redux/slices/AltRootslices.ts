import { createSlice } from '@reduxjs/toolkit'

const altrootSlice = createSlice ({
    name: 'root',
    initialState: {
        altsong_title: 'Title',
        altartist: 'Artist',
        altalbum: 'Album',
        altyear: 'Year',
    },
    reducers: {
        choosealtsong_title: (state, action) => {state.altsong_title = action.payload},
        choosealtartist: (state, action) => {state.altartist = action.payload},
        choosealtalbum: (state, action) => {state.altalbum = action.payload},
        choosealtyear: (state, action) => {state.altyear = action.payload},
        
    }
})

export const reducer = altrootSlice.reducer;
export const {choosealtsong_title, choosealtartist, choosealtalbum, choosealtyear} = altrootSlice.actions