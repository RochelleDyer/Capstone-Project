
import { useEffect, useState} from 'react'
import { hiphopserver_calls } from '../api/hiphopserver'

export const useGetData = () => {
    const [ hiphopsongData, setData ] = useState<[]>([])

    async function handleHiphopDataFetch(){
        const result = await hiphopserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleHiphopDataFetch();
    }, [])

    return { hiphopsongData, getData: handleHiphopDataFetch}

}



