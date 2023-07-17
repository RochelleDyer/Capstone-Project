
import { useEffect, useState} from 'react'
import { rnbserver_calls } from '../api/server'

export const useGetData = () => {
    const [ rnbsongData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await rnbserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { rnbsongData, getData: handleDataFetch}

}


