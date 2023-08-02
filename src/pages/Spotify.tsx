import Background from '../assets/images/spotify.jpg'

import { Container } from 'react-bootstrap'

const AUTH_URL = 
'https://accounts.spotify.com/authorize?client_id=3a1a88a09115457eb698947ad230e0e2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

function spotify() {
    return (
        <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div> 

        </div>      
       )    
}

function Login() {
  return (
    
     <Container className="d-flex justify-content-center align-items-center" style= {{minHeight: '100'}}>;
       <a className="btn btn-success btn-lg" href={AUTH_URL}>Login With Spotify</a>
    </Container>
  
  )
}

export default spotify; Login




