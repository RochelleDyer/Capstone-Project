import { createSlice } from '@reduxjs/toolkit'

const hiphoprootSlice = createSlice ({
    name: 'root',
    initialState: {
        hiphopsong_title: 'Title',
        hiphopartist: 'Artist',
        hiphopalbum: 'Album',
        hiphopyear: 'Year',
    },
    reducers: {
        choosehiphopsong_title: (state, action) => {state.hiphopsong_title = action.payload},
        choosehiphopartist: (state, action) => {state.hiphopartist = action.payload},
        choosehiphopalbum: (state, action) => {state.hiphopalbum = action.payload},
        choosehiphopyear: (state, action) => {state.hiphopyear = action.payload},
        
    }
})

export const reducer = hiphoprootSlice.reducer;
export const {choosehiphopsong_title, choosehiphopartist, choosehiphopalbum, choosehiphopyear} = hiphoprootSlice.actions