import { configureStore} from '@reduxjs/toolkit'
import { reducer } from './slices/RnbRootslices'


export const rnbstore = configureStore ({
    reducer,
    devTools:true,
})