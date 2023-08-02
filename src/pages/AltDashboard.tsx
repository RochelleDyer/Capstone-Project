import AltDataTable from '../components/AltDataTable'
import Background from '../assets/images/Alternativebg.jpg'

function AltDashboard() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div> 
    <div>
      <AltDataTable />
    </div>
    </div>
  )
}
export default AltDashboard
