import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'


function Navbar() {
  const[isVisible, setIsVisible] = useState (false)

  const signOutOnClick = () => {
    signOut (auth)
    location.reload ();
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup (auth, Providers.google);
    if (response.user ) {
        location.reload();
    }
  }

  const dropDown = () => {
    setIsVisible (!isVisible)
  }

  const clicked = () => {
    setIsVisible (false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6' >
            <Link to='/' className='font-semibold text-xl tracking-tight'>Digital Music Application</Link>
        </div>

        <div className="block">
            <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-white border rounded border-white hover:border-blue-500 hover:text-blue-500">
                    <i className="fa-solid fa-bars "> M e n u</i>
            </button>
        </div>
        { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className='text-sm lg:flex-grow'>
                    <Button className='p-3 ml-60 m-3 bg-blue-500 justify-center border rounded border-black'>
                        <div>
                            <Link to='/' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'>Home</Link>
                        </div>                   
                    </Button>
                                   
                    <Button className='p-3 m-3 bg-blue-500 justify-center border rounded border-black'>
                        <div>
                            <Link to='/genres' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'>Music Genres</Link>
                        </div>
                    </Button>

                    <Button className='p-3 m-3 bg-blue-500 justify-center border rounded border-black'>
                        <div>
                            <Link to='/favs' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'>Staff Picks</Link>
                        </div>
                    </Button>

                    <Button className='p-3 m-3 bg-blue-500 justify-center border rounded border-black'>
                        <div>
                            <Link to='/spotify' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'>Spotify</Link>
                        </div>
                    </Button>

                    <Button className='p-3 m-3 bg-blue-500 justify-center border rounded border-black'>
                        <div>
                            <Link to='/contact' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'>Contact Us</Link>
                        </div>
                    </Button>

                    <Button className='p-3 m-3 bg-blue-500 justify-center border rounded border-black'> 
                        <div> 
                            <Link to='https://capstone-project-backend-x3j1.onrender.com/signup' onClick = {clicked} className='flex place-tiems-center mt-4 lg:inline-block lg:mt-0
                            text-black hover:text-white mr-4'>
                                Sign Up
                            </Link>
                        </div>
                    </Button>
                    
                    {!auth.currentUser ?                        
                        
                        <Button className='p-3 m-3 bg-blue-500 border rounded border-black justify-center'>
                            <div>
                                <Link to='https://timely-wisp-4ed4f4.netlify.app/#/' onClick= {() => {signInOnClick()}} className='flex place-items-center mt-4
                                lg:inline-block lg:mt-0 text-black hover:text-white'>
                                    Sign In
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 m-3 bg-blue-500 border rounded border-black justify-center'>
                            <div>
                                <Link to='https://timely-wisp-4ed4f4.netlify.app/#/' onClick= {() => {signOutOnClick()}} className='flex place-items-center mt-4
                                lg:inline-block lg:mt-0 text-black hover:text-white'>
                                    Sign Out
                                </Link>
                            </div>
                        </Button>
                        
                    }
                </div>
            </div>
            ) : (
            <></>)}
    </nav>

  )
}

export default Navbar
