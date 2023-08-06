import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { metalserver_calls } from "../api/metalserver"
import { useDispatch, useStore } from "react-redux"
import { choosemetalsong_title, choosemetalartist, choosemetalalbum, choosemetalyear} from '../redux/slices/MetalRootslices'

interface MetalSongInfoProps {
    id? : string []
   
}

const MetalSongInfo = (props: MetalSongInfoProps) => {
    const { register, handleSubmit } = useForm ({})
    const dispatch = useDispatch();
    const store = useStore ();

    const onSubmit = (data:any, event:any) => {
        console.log(`ID: ${ props.id }`);
        if (props.id && props.id.length > 0) {
            metalserver_calls.update(props.id[0], data)
            console.log (`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(choosemetalsong_title(data.metalsong_title));
            dispatch(choosemetalartist(data.metalartist));
            dispatch(choosemetalalbum(data.metalalbum));
            dispatch(choosemetalyear(data.metalyear));
            
            metalserver_calls.create (store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
            <label htmlFor="metalsong_title">Song Title</label>
            <Input {...register('metalsong_title')} name='metalsong_title' placeholder='Song Title'/>
        </div>
        <div>   
            <label htmlFor="metalartistr">Artist</label>
            <Input {...register('metalartist')}name='metalartist' placeholder='Artist'/>
        </div>
        <div>   
            <label htmlFor="metalalbum">Album</label>
            <Input {...register('metalalbum')}name='metalalbum' placeholder='Album'/>
        </div>
        <div>   
            <label htmlFor="metalyear">Year</label>
            <Input {...register('metalyear')} name='metalyear' placeholder='Year'/>
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

export default MetalSongInfo



