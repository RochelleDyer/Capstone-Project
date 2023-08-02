
import { useEffect, useState} from 'react'
import { rnbserver_calls } from '../api/server'

export const useGetData = () => {
    const [ rnbsongData, setData ] = useState<[]>([])

    async function handleRnbDataFetch(){
        const result = await rnbserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleRnbDataFetch();
    }, [])

    return { rnbsongData, getData: handleRnbDataFetch}

}



