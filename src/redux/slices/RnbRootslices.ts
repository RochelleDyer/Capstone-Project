import { createSlice } from '@reduxjs/toolkit'

const rnbrootSlice = createSlice ({
    name: 'root',
    initialState: {
        rnbsong_title: 'Title',
        rnbartist: 'Artist',
        rnbalbum: 'Album',
        rnbyear: 'Year',
    },
    reducers: {
        choosernbsong_title: (state, action) => {state.rnbsong_title = action.payload},
        choosernbartist: (state, action) => {state.rnbartist = action.payload},
        choosernbalbum: (state, action) => {state.rnbalbum = action.payload},
        choosernbyear: (state, action) => {state.rnbyear = action.payload},
        
    }
})

export const reducer = rnbrootSlice.reducer;
export const {choosernbsong_title, choosernbartist, choosernbalbum, choosernbyear} = rnbrootSlice.actions