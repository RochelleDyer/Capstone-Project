
import { useEffect, useState} from 'react'
import { hiphopserver_calls } from '../api/server'

export const useGetData = () => {
    const [ hiphopsongData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await hiphopserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { hiphopsongData, getData: handleDataFetch}

}


