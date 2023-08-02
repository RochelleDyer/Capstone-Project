import Background from '../assets/images/musicgenres.jpg'
import alternative from '../assets/images/alternative.jpg'
import blues from '../assets/images/blues.jpg'
import country from '../assets/images/country.jpg'
import heavymetal from '../assets/images/heavymetal.jpg'
import hiphop from '../assets/images/hiphop.jpg'
import rnb from '../assets/images/rnb.jpg'
import { Link } from 'react-router-dom'
// import { useState } from 'react'



function Genres() {
 
    // const[setIsVisible] = useState (false)

    const clicked = () => {
        setIsVisible: Boolean
    } 
     
  return (
    <div style={{backgroundImage: `url(${Background})`}}
              className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'></div> 
 
    <div className="container">
        <div className="gallery ml-40">
            <table className = 'mt-2'>
                <tbody>
                    <tr>
                        <td className='p-5'>                      
                            <Link to='/AltDashboard' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'><img src= {alternative} alt="Alternative"></img> </Link>
                        </td>
                        <td className="p-5">                        
                            <Link to='/BluDashboard' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'><img src= {blues} alt="Blues"></img> </Link>
                        </td>
                        <td className="p-5">
                            <Link to='/CountryDashboard' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'><img src= {country} alt="Country"></img> </Link>
                        </td>
                        
                    </tr>
                    <tr>
                        <td className="p-5">
                            <Link to='/MetalDashboard' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'><img src= {heavymetal} alt="Heavy Metal"></img> </Link>
                        </td>
                        <td className="p-5">
                        <Link to='/HiphopDashboard' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'><img src= {hiphop} alt="Hip Hop"></img> </Link>
                        </td>
                        <td className="p-5">
                        <Link to='/RnbDashboard' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'><img src= {rnb} alt="R&B"></img> </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
      </div> 
    </div> 
  )
}

export default Genres
