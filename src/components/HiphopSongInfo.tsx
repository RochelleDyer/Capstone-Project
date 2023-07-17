import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { hiphopserver_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { choosehiphopsong_title, choosehiphopartist, choosehiphopalbum, choosehiphopyear} from '../redux/slices/HiphopRootslices'

interface HiphopSongInfoProps {
    id? : string []
   
}

const HiphopSongInfo = (props: HiphopSongInfoProps) => {
    const { register, handleSubmit } = useForm ({})
    const dispatch = useDispatch();
    const store = useStore ();

    const onSubmit = (data:any, event:any) => {
        console.log(`ID: ${ props.id }`);
        if (props.id && props.id.length > 0) {
            hiphopserver_calls.update(props.id[0], data)
            console.log (`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(choosehiphopsong_title(data.hiphopsong_title));
            dispatch(choosehiphopartist(data.hiphopartist));
            dispatch(choosehiphopalbum(data.hiphopalbum));
            dispatch(choosehiphopyear(data.hiphopyear));
            
            hiphopserver_calls.create (store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
            <label htmlFor="hiphopsong_title">Song Title</label>
            <Input {...register('hiphopsong_title')} name='hiphopsong_title' placeholder='Song Title'/>
        </div>
        <div>   
            <label htmlFor="hiphopartistr">Artist</label>
            <Input {...register('hiphopartist')}name='hiphopartist' placeholder='Artist'/>
        </div>
        <div>   
            <label htmlFor="hiphopalbum">Album</label>
            <Input {...register('hiphopalbum')}name='hiphopalbum' placeholder='Album'/>
        </div>
        <div>   
            <label htmlFor="hiphopyear">Year</label>
            <Input {...register('hiphopyear')} name='hiphopyear' placeholder='Year'/>
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

export default HiphopSongInfo



