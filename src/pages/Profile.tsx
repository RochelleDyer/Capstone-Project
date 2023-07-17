import Button from '../components/Button'
import Background from '../assets/images/profile.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom' 


function Profile() {
  const[isVisible, setIsVisible] = useState (false)

  const clicked = () => {
      setIsVisible (false)
  } 
  return (
    
      <div style={{backgroundImage: `url(${Background})`}}
              className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
          <div className='flex place-items-center h-screen'></div> 

      <div className="container p-5">
          <div className="row">                   
            <ul className="list-group"> 
                <li className="list-group-item text-center font-bold"> <h3 className="p-2">Profile details:</h3></li>               
                <li className="list-group-item text-center font-bold">Email:    </li>
                <li className="list-group-item text-center font-bold">Token:    </li>
                <li className="list-group-item text-center">
                <Button className='p-3 m-5 bg-blue-500 justify-center border rounded border-black'>
                        <div>
                            <Link to='/' onClick = {clicked} className='flex place-tiems-center mt-4 justify-center lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'>Update Profile Info Here</Link>
                        </div>
                </Button>
                </li>  
            </ul>
            
          </div>        
      </div>
      </div>  
  )
}

export default Profile
