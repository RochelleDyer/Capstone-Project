import Background from '../assets/images/spotify.jpg'
import construction from '../assets/images/construction.jpg'



function spotify() {
    return (
        <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div>

        <div> 
          <table className='m-20'>
            <tbody>
            <tr>
              <td className='p-20'>
                <img src = { construction }  alt="Under Construction"></img>
              </td>
            </tr>
            </tbody>
          </table>
          </div>      

        </div>      
       )    
}



export default spotify




