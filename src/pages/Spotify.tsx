import Background from '../assets/images/spotify.jpg'




function spotify() {
    return (
        <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div>

                  <div className='container x-10 my-20 flex flex-col p-10'
                        style = {{ height: 400, width: '20%'}}> <br></br> <br></br> <br></br>
                          <a href ='https://open.spotify.com/?' className='p-3 mx-3 bg-green-500 text-white hover:text-black text-center my-20 rounded'>Click Here to Log into Spotify</a>          
                  </div>  

        </div>      
       )    
}



export default spotify




