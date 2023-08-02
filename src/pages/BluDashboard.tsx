import BluDataTable from '../components/BluDataTable'
import Background from '../assets/images/Bluesbg.jpg'

function BluDashboard() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div> 
    <div>
      <BluDataTable />
    </div>
    </div>
  )
}
export default BluDashboard
