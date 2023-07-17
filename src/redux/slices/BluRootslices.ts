import { createSlice } from '@reduxjs/toolkit'

const blurootSlice = createSlice ({
    name: 'root',
    initialState: {
        blusong_title: 'Title',
        bluartist: 'Artist',
        blualbum: 'Album',
        bluyear: 'Year',
    },
    reducers: {
        chooseblusong_title: (state, action) => {state.blusong_title = action.payload},
        choosebluartist: (state, action) => {state.bluartist = action.payload},
        chooseblualbum: (state, action) => {state.blualbum = action.payload},
        choosebluyear: (state, action) => {state.bluyear = action.payload},
        
    }
})

export const reducer = blurootSlice.reducer;
export const {chooseblusong_title, choosebluartist, chooseblualbum, choosebluyear} = blurootSlice.actions