
import { useEffect, useState} from 'react'
import { altserver_calls } from '../api/server'

export const useGetData = () => {
    const [ altsongData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await altserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { altsongData, getData: handleDataFetch}

}


