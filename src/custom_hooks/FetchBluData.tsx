
import { useEffect, useState} from 'react'
import { bluserver_calls } from '../api/bluserver'

export const useGetData = () => {
    const [ blusongData, setData ] = useState<[]>([])

    async function handleBluDataFetch(){
        const result = await bluserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleBluDataFetch();
    }, [])

    return { blusongData, getData: handleBluDataFetch }

}


