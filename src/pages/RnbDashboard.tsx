import RnbDataTable from '../components/RnbDataTable'
import Background from '../assets/images/Rnbbg.jpg'

function RnbDashboard() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div>
    <div>
      <RnbDataTable />
    </div>
    </div>
  )
}
export default RnbDashboard


