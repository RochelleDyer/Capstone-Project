
import { useEffect, useState} from 'react'
import { altserver_calls } from '../api/altserver'

export const useGetData = () => {
    const [ altsongData, setData ] = useState<[]>([])

    async function handleAltDataFetch(){
        const result = await altserver_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleAltDataFetch();
    }, [])

    return { altsongData, getData: handleAltDataFetch }

}


