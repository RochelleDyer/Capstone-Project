import Button from './Button'
import CountryModal from './CountryModal'
import { useState } from 'react';
import { countryserver_calls } from '../api/server';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom_hooks/FetchCountryData';

const columns: GridColDef [] = [
  { field: 'id', headerName: 'ID', width: 200, hide: true},
  { field: 'countrysong_title', headerName: 'Song Title', flex: 2},
  { field: 'countryartist', headerName: 'Artist', flex: 1},
  { field: 'countryalbum', headerName: 'Album', flex: 1},
  { field: 'countryyear', headerName: 'Year', flex: 1},
]

function CountryDataTable() {
  const [open, setOpen ] = useState (false);
  const { countrysongData, getData } = useGetData ();
  const [selectionModel, setSelectionModel] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    countryserver_calls.delete (selectionModel[0]);
    getData ();
    console.log (`Selection model: ${selectionModel}`)
    setTimeout ( () => { window.location.reload () }, 500)
  }

  

  return (
  <>
    {/*Modal*/}
    <CountryModal 
        id = {selectionModel}
        open={open}
        onClose={handleClose}
        />

    {/* Buttons section for controlling CRUD*/}
    <div className="flex flex-row">
        <div>
            <button className="p-3 m-3 bg-black rounded text-white hover:text-blue-500" 
            onClick = {() => handleOpen ()}>
                Create New Country Song
            </button>
          </div> 
            
          <Button onClick= {handleOpen} className='p-3 m-3 bg-black text-white rounded hover:text-blue-500'>Update Country Song</Button>
          <Button onClick={deleteData} className='p-3 m-3 bg-black text-white rounded hover:text-blue-500'>Delete Country Song</Button>           
        
    </div>

    {/*DataTable Section */}

    <div className= { open ? "hidden" : 'container x-10 my-5 flex flex-col'}
            style = {{ height: 400, width: '100%'}}>
                <h2 className='p-3 mx-3 bg-black text-white my-2 rounded'>My Country Songs</h2>
                <DataGrid rows={countrysongData} columns= {columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange= { (item:any) => {
                    setSelectionModel (item)
                }}
                />

        </div>
  </>
  )
}

export default CountryDataTable

