import {useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true},
    { field: 'make', headerName: 'Make', flex: 1},
    { field: 'model', headerName: 'Model', flex: 1},
    { field: 'year', headerName: 'Year', flex: 1},    
    
]

function DataTable() {
    const [open, setOpen] = useState(false);
    const {carData, getData} = useGetData();
    const [selectionModel, setSelectionModel] = useState <string[]>([])

    const handleOpen = () => {
        setOpen (true)
    }

    const handleClose =() => {
        setOpen (false)
    }

    const deleteData = () => {
        server_calls.delete (selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout ( () => {window.location.reload() }, 500)
    }

  return (
  <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose ={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button className='p-2 m-3 text-blue-800  bg-orange-200 rounded hover:bg-orange-700 hover:text-white' 
                onClick = {() => handleOpen()}>
                    Create New Car
                </button>
            </div>
            
            <Button onClick={handleOpen} className='p-2 m-3 text-blue-800 bg-orange-200 rounded hover:bg-orange-700 hover:text-white' >Update Car</Button>
            <Button onClick={deleteData} className='p-2 m-3 text-blue-800 bg-orange-200 rounded hover:bg-orange-700 hover:text-white' >Delete Car</Button>
        </div>

        {/*Data Table section*/}

        <div className= { open ? "hidden" : 'container mx-0 my-20 flex flex-col'}
            style = {{ height: 300, width: '100%'}}>
                <h2 className='p-2 text-blue-800 bg-orange-200 my-2 mx-20 rounded'>My Cars</h2>
                <DataGrid rows={carData} columns= {columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange= { (item:any) => {
                    setSelectionModel (item)
                }}
                />

        </div>
  </>
  )
}

export default DataTable
