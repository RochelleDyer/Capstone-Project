import { createSlice } from '@reduxjs/toolkit'

const countryrootSlice = createSlice ({
    name: 'root',
    initialState: {
        countrysong_title: 'Title',
        countryartist: 'Artist',
        countryalbum: 'Album',
        countryyear: 'Year',
    },
    reducers: {
        choosecountrysong_title: (state, action) => {state.countrysong_title = action.payload},
        choosecountryartist: (state, action) => {state.countryartist = action.payload},
        choosecountryalbum: (state, action) => {state.countryalbum = action.payload},
        choosecountryyear: (state, action) => {state.countryyear = action.payload},
        
    }
})

export const reducer = countryrootSlice.reducer;
export const {choosecountrysong_title, choosecountryartist, choosecountryalbum, choosecountryyear} = countryrootSlice.actions