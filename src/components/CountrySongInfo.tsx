import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { countryserver_calls } from "../api/countryserver"
import { useDispatch, useStore } from "react-redux"
import { choosecountrysong_title, choosecountryartist, choosecountryalbum, choosecountryyear} from '../redux/slices/CountryRootslices'

interface CountrySongInfoProps {
    id? : string []
   
}

const CountrySongInfo = (props: CountrySongInfoProps) => {
    const { register, handleSubmit } = useForm ({})
    const dispatch = useDispatch();
    const store = useStore ();

    const onSubmit = (data:any, event:any) => {
        console.log(`ID: ${ props.id }`);
        if (props.id && props.id.length > 0) {
            countryserver_calls.update(props.id[0], data)
            console.log (`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(choosecountrysong_title(data.countrysong_title));
            dispatch(choosecountryartist(data.countryartist));
            dispatch(choosecountryalbum(data.countryalbum));
            dispatch(choosecountryyear(data.countryyear));
            
            countryserver_calls.create (store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
            <label htmlFor="countrysong_title">Song Title</label>
            <Input {...register('countrysong_title')} name='countrysong_title' placeholder='Song Title'/>
        </div>
        <div>   
            <label htmlFor="countryartistr">Artist</label>
            <Input {...register('countryartist')}name='countryartist' placeholder='Artist'/>
        </div>
        <div>   
            <label htmlFor="countryalbum">Album</label>
            <Input {...register('countryalbum')}name='countryalbum' placeholder='Album'/>
        </div>
        <div>   
            <label htmlFor="countryyear">Year</label>
            <Input {...register('countryyear')} name='countryyear' placeholder='Year'/>
        </div>
        
        <div className="flex p-1">
            <Button 
                className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
                    Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default CountrySongInfo



