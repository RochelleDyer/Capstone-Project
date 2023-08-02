import HiphopDataTable from '../components/HiphopDataTable'
import Background from '../assets/images/Hiphopbg.jpg'

function HiphopDashboard() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div> 
    <div>
      <HiphopDataTable />
    </div>
    </div>
  )
}
export default HiphopDashboard
