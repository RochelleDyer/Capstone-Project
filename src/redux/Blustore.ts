import { configureStore} from '@reduxjs/toolkit'
import { reducer } from './slices/BluRootslices'


export const blustore = configureStore ({
    reducer,
    devTools:true,
})