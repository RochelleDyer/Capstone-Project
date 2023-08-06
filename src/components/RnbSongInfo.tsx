import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { rnbserver_calls } from "../api/rnbserver"
import { useDispatch, useStore } from "react-redux"
import { choosernbsong_title, choosernbartist, choosernbalbum, choosernbyear} from '../redux/slices/RnbRootslices'

interface RnbSongInfoProps {
    id? : string []
   
}

const RnbSongInfo = (props: RnbSongInfoProps) => {
    const { register, handleSubmit } = useForm ({})
    const dispatch = useDispatch();
    const store = useStore ();

    const onSubmit = (data:any, event:any) => {
        console.log(`ID: ${ props.id }`);
        if (props.id && props.id.length > 0) {
            rnbserver_calls.update(props.id[0], data)
            console.log (`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(choosernbsong_title(data.rnbsong_title));
            dispatch(choosernbartist(data.rnbartist));
            dispatch(choosernbalbum(data.rnbalbum));
            dispatch(choosernbyear(data.rnbyear));
            
            rnbserver_calls.create (store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
            <label htmlFor="rnbsong_title">Song Title</label>
            <Input {...register('rnbsong_title')} name='rnbsong_title' placeholder='Song Title'/>
        </div>
        <div>   
            <label htmlFor="rnbartistr">Artist</label>
            <Input {...register('rnbartist')}name='rnbartist' placeholder='Artist'/>
        </div>
        <div>   
            <label htmlFor="rnbalbum">Album</label>
            <Input {...register('rnbalbum')}name='rnbalbum' placeholder='Album'/>
        </div>
        <div>   
            <label htmlFor="rnbyear">Year</label>
            <Input {...register('rnbyear')} name='rnbyear' placeholder='Year'/>
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

export default RnbSongInfo



