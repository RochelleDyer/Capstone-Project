import { configureStore} from '@reduxjs/toolkit'
import { reducer } from './slices/AltRootslices'


export const altstore = configureStore ({
    reducer,
    devTools:true,
})