import { configureStore} from '@reduxjs/toolkit'
import { reducer } from './slices/MetalRootslices'


export const metalstore = configureStore ({
    reducer,
    devTools:true,
})