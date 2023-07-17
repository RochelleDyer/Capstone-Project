import Button from './Button'
import RnbModal from './RnbModal'
import { useState } from 'react';
import { rnbserver_calls } from '../api/server';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchRnbData';

const columns: GridColDef [] = [
  { field: 'id', headerName: 'ID', width: 200, hide: true},
  { field: 'rnbsong_title', headerName: 'Song Title', flex: 2},
  { field: 'rnbartist', headerName: 'Artist', flex: 1},
  { field: 'rnbalbum', headerName: 'Album', flex: 1},
  { field: 'rnbyear', headerName: 'Year', flex: 1},
]

function RnbDataTable() {
  const [open, setOpen ] = useState (false);
  const { rnbsongData, getData } = useGetData ();
  const [selectionModel, setSelectionModel] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    rnbserver_calls.delete (selectionModel[0]);
    getData ();
    console.log (`Selection model: ${selectionModel}`)
    setTimeout ( () => { window.location.reload () }, 500)
  }

  

  return (
  <>
    {/*Modal*/}
    <RnbModal 
        id = {selectionModel}
        open={open}
        onClose={handleClose}
        />

    {/* Buttons section for controlling CRUD*/}
    <div className="flex flex-row">
        <div>
            <button className="p-3 m-3 bg-black text-white rounded hover:text-blue-500" 
            onClick = {() => handleOpen ()}>
                Create New R&B Song
            </button>
          </div> 
            
          <Button onClick= {handleOpen} className='p-3 m-3 bg-black text-white rounded hover:text-blue-500'>Update R&B Song</Button>
          <Button onClick={deleteData} className='p-3 m-3 bg-black text-white rounded hover:text-blue-500'>Delete R&B Song</Button>           
        
    </div>

    {/*DataTable Section */}

    <div className= { open ? "hidden" : 'container x-10 my-5 flex flex-col'}
            style = {{ height: 400, width: '100%'}}>
                <h2 className='p-3 mx-3 bg-black text-white rounded'>My R&B Songs</h2>
                <DataGrid rows={rnbsongData} columns= {columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange= { (item:any) => {
                    setSelectionModel (item)
                }}
                />

        </div>
  </>
  )
}

export default RnbDataTable

