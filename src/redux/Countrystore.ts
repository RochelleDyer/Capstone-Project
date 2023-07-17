import { configureStore} from '@reduxjs/toolkit'
import { reducer } from './slices/CountryRootslices'


export const countrystore = configureStore ({
    reducer,
    devTools:true,
})