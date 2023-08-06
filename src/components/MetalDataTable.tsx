import Button from './Button'
import MetalModal from './MetalModal'
import { useState } from 'react';
import { metalserver_calls } from '../api/metalserver';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchMetalData';

const columns: GridColDef [] = [
  { field: 'id', headerName: 'ID', width: 200, hide: true},
  { field: 'metalsong_title', headerName: 'Song Title', flex: 2},
  { field: 'metalartist', headerName: 'Artist', flex: 1},
  { field: 'metalalbum', headerName: 'Album', flex: 1},
  { field: 'metalyear', headerName: 'Year', flex: 1},
]

function MetalDataTable() {
  const [open, setOpen ] = useState (false);
  const { metalsongData, getData } = useGetData ();
  const [selectionModel, setSelectionModel] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    metalserver_calls.delete (selectionModel[0]);
    getData ();
    console.log (`Selection model: ${selectionModel}`)
    setTimeout ( () => { window.location.reload () }, 500)
  }

  

  return (
  <>
    {/*Modal*/}
    <MetalModal 
        id = {selectionModel}
        open={open}
        onClose={handleClose}
        />

    {/* Buttons section for controlling CRUD*/}
    <div className="flex flex-row">
        <div>
            <button className="p-3 m-3 bg-purple-400 text-white rounded hover:text-black" 
            onClick = {() => handleOpen ()}>
                Create New Heavy Metal Song
            </button>
          </div> 
            
          <Button onClick= {handleOpen} className='p-3 m-3 bg-purple-400 text-white rounded hover:text-black'>Update Heavy Metal Song</Button>
          <Button onClick={deleteData} className='p-3 m-3 bg-purple-400 text-white rounded hover:text-black'>Delete Heavy Metal Song</Button>           
          
          <div>            
            <a href = "https://timely-wisp-4ed4f4.netlify.app/#/genres">
              <button className="p-3 m-3 bg-purple-400 text-white rounded hover:text-black">
                Other Genres
              </button>
            </a>            
          </div>  
    </div>

    {/*DataTable Section */}

    <div className= { open ? "hidden" : 'container x-10 my-5 flex flex-col'}
            style = {{ height: 400, width: '100%'}}>
                <h2 className='p-3 mx-3 bg-purple-400 text-white rounded'>My Heavy Metal Songs</h2>
                <DataGrid rows={metalsongData} columns= {columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange= { (item:any) => {
                    setSelectionModel (item)
                }}
                />

        </div>
  </>
  )
}

export default MetalDataTable


