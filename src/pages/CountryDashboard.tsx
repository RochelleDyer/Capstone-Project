import CountryDataTable from '../components/CountryDataTable'
import Background from '../assets/images/Countrybg.jpg'

function CountryDashboard() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div> 
    <div>
      <CountryDataTable />
    </div>
    </div>
  )
}
export default CountryDashboard
