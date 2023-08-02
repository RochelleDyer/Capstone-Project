
import { useEffect, useState} from 'react'
import { metalserver_calls } from '../api/server'

export const useGetData = () => {
    const [ metalsongData, setData ] = useState<[]>([])

    async function handleMetalDataFetch(){
        const result = await metalserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleMetalDataFetch();
    }, [])

    return { metalsongData, getData: handleMetalDataFetch}

}



