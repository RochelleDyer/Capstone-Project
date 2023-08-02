
import { useEffect, useState} from 'react'
import { countryserver_calls } from '../api/server'

export const useGetData = () => {
    const [ countrysongData, setData ] = useState<[]>([])

    async function handleCountryDataFetch(){
        const result = await countryserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleCountryDataFetch();
    }, [])

    return { countrysongData, getData: handleCountryDataFetch }

}



