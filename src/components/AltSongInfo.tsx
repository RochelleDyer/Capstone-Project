import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { altserver_calls } from "../api/altserver"
import { useDispatch, useStore } from "react-redux"
import { choosealtsong_title, choosealtartist, choosealtalbum, choosealtyear} from '../redux/slices/AltRootslices'

interface AltSongInfoProps {
    id? : string []
   
}

const AltSongInfo = (props: AltSongInfoProps) => {
    const { register, handleSubmit } = useForm ({})
    const dispatch = useDispatch();
    const store = useStore ();

    const onSubmit = (data:any, event:any) => {
        console.log(`ID: ${ props.id }`);
        if (props.id && props.id.length > 0) {
            altserver_calls.update(props.id[0], data)
            console.log (`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(choosealtsong_title(data.altsong_title));
            dispatch(choosealtartist(data.altartist));
            dispatch(choosealtalbum(data.altalbum));
            dispatch(choosealtyear(data.altyear));
            
            altserver_calls.create (store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
            <label htmlFor="altsong_title">Song Title</label>
            <Input {...register('altsong_title')} name='altsong_title' placeholder='Song Title'/>
        </div>
        <div>   
            <label htmlFor="altartist">Artist</label>
            <Input {...register('altartist')}name='altartist' placeholder='Artist'/>
        </div>
        <div>   
            <label htmlFor="altalbum">Album</label>
            <Input {...register('altalbum')}name='altalbum' placeholder='Album'/>
        </div>
        <div>   
            <label htmlFor="altyear">Year</label>
            <Input {...register('altyear')} name='altyear' placeholder='Year'/>
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

export default AltSongInfo



