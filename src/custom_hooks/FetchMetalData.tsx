
import { useEffect, useState} from 'react'
import { metalserver_calls } from '../api/server'

export const useGetData = () => {
    const [ metalsongData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await metalserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { metalsongData, getData: handleDataFetch}

}


