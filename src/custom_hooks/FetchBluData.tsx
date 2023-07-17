import { useEffect, useState} from 'react'
import { bluserver_calls } from '../api/server'

export const useGetData = () => {
    const [ blusongData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await bluserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { blusongData, getData: handleDataFetch}

}




