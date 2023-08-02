import Button from './Button'
import AltModal from './AltModal'
import { useState } from 'react';
import { altserver_calls } from '../api/server';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchAltData';

const columns: GridColDef [] = [
  { field: 'id', headerName: 'ID', width: 200, hide: true},
  { field: 'altsong_title', headerName: 'Song Title', flex: 2},
  { field: 'altartist', headerName: 'Artist', flex: 1},
  { field: 'altalbum', headerName: 'Album', flex: 1},
  { field: 'altyear', headerName: 'Year', flex: 1},
]

function AltDataTable() {
  const [open, setOpen ] = useState (false);
  const { altsongData, getData } = useGetData ();
  const [selectionModel, setSelectionModel] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    altserver_calls.delete (selectionModel[0]);
    getData ();
    console.log (`Selection model: ${selectionModel}`)
    setTimeout ( () => { window.location.reload () }, 500)
  }

  

  return (
  <>
    {/*Modal*/}
    <AltModal 
        id = {selectionModel}
        open={open}
        onClose={handleClose}
        />

    {/* Buttons section for controlling CRUD*/}
    <div className="flex flex-row">
        <div>
            <button className="p-3 m-3 bg-black rounded text-white hover:text-blue-500" 
            onClick = {() => handleOpen ()}>
                Create New Alternative Song
            </button>
          </div> 
            
          <Button onClick= {handleOpen} className='p-3 m-3 bg-black text-white rounded hover:text-blue-500'>Update Alternative Song</Button>
          <Button onClick={deleteData} className='p-3 m-3 bg-black text-white rounded hover:text-blue-500'>Delete Alternative Song</Button>           
        
          {/* <div>            
            <a href = "https://timely-wisp-4ed4f4.netlify.app/#/genres">
              <button className="p-3 m-3 bg-black text-white rounded hover:text-blue-500">
                Other Genres
              </button>
            </a>            
          </div>  */}
    </div>

    {/*DataTable Section */}

    <div className= { open ? "hidden" : 'container x-10 my-5 flex flex-col'}
            style = {{ height: 400, width: '100%'}}>
                <h2 className='p-3 mx-3 bg-black text-white my-2 rounded'>My Alternative Songs</h2>
                <DataGrid rows={altsongData} columns= {columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange= { (item:any) => {
                    setSelectionModel (item)
                }}
                />

        </div>
  </>
  )
}

export default AltDataTable


