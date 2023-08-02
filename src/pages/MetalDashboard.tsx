import MetalDataTable from '../components/MetalDataTable'
import Background from '../assets/images/Metalbg.jpg'

function MetalDashboard() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div> 
    <div>
      <MetalDataTable />
    </div>
    </div>
  )
}
export default MetalDashboard
