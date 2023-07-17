import { configureStore} from '@reduxjs/toolkit'
import { reducer } from './slices/HiphopRootslices'


export const hiphopstore = configureStore ({
    reducer,
    devTools:true,
})