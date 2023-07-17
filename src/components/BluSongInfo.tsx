import Input from "./Input"
import Button from "./Button"
import { useForm } from 'react-hook-form'
import { bluserver_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseblusong_title, choosebluartist, chooseblualbum, choosebluyear} from '../redux/slices/BluRootslices'

interface BluSongInfoProps {
    id? : string []
   
}

const BluSongInfo = (props: BluSongInfoProps) => {
    const { register, handleSubmit } = useForm ({})
    const dispatch = useDispatch();
    const store = useStore ();

    const onSubmit = (data:any, event:any) => {
        console.log(`ID: ${ props.id }`);
        if (props.id && props.id.length > 0) {
            bluserver_calls.update(props.id[0], data)
            console.log (`Updated: ${ data } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseblusong_title(data.blusong_title));
            dispatch(choosebluartist(data.bluartist));
            dispatch(chooseblualbum(data.blualbum));
            dispatch(choosebluyear(data.bluyear));
            
            bluserver_calls.create (store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>   
            <label htmlFor="blusong_title">Song Title</label>
            <Input {...register('blusong_title')} name='blusong_title' placeholder='Song Title'/>
        </div>
        <div>   
            <label htmlFor="bluartist">Artist</label>
            <Input {...register('bluartist')}name='bluartist' placeholder='Artist'/>
        </div>
        <div>   
            <label htmlFor="blualbum">Album</label>
            <Input {...register('blualbum')}name='blualbum' placeholder='Album'/>
        </div>
        <div>   
            <label htmlFor="bluyear">Year</label>
            <Input {...register('bluyear')} name='bluyear' placeholder='Year'/>
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

export default BluSongInfo



