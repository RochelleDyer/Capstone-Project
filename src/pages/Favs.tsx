

import Background from '../assets/images/staffpicks.jpg'

import Breezy from '../assets/images/Breezy.jpg'
import DamnYourEyes from '../assets/images/DamnYourEyes.jpg'
import NoneofYourBusiness from '../assets/images/NoneofYourBusiness.jpg'
import NumbLittleBug from '../assets/images/NumbLittleBug.jpg'
import Sabotage from '../assets/images/Sabotage.jpg'
import Wifey from '../assets/images/Wifey.jpg'
import AllNight from '../assets/images/AllNight.jpg'
import redesign from '../assets/images/redesign.jpg'
import AboutDamnTime from '../assets/images/AboutDamnTime.jpg'
import TooClose from '../assets/images/TooClose.jpg'

// Declarations for our song values

function Favs() { 

    return (
        <div style={{backgroundImage: `url(${Background})`}}
                className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
                  <div className='flex place-items-center h-screen'></div> 
        

        <div className="container">
          <h3 className = ' text-black mt-6 text-center text-3xl'><u>Weekly Staff Favorites</u></h3>
          <div className="gallery"> 
            <table className = 'table mt-2 '>
              <tbody>
                <tr>
                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=KPmRRaTPZLs' target='_blank'>                     
                        <img src = { Breezy }  alt="Breezy"></img>
                        </a> 
                        <p className='text-center text-xl'>Breezy</p>
                    </td>

                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=yzcXoZ2Xu_A' target='_blank'>                    
                        <img src= {DamnYourEyes} alt="DamnYourEyes"></img>
                        </a>
                        <p className='text-center text-xl'>Damn Your Eyes</p>
                    </td>

                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=r2j-djuqUeY' target='_blank'>                   
                        <img src= {NoneofYourBusiness} alt="NoneofYourBusiness"></img>
                        </a>  
                        <p className='text-center text-xl'>None of Your Business</p>
                    </td>

                    <td className='p-5'> 
                        <a href = 'https://www.youtube.com/watch?v=qCaparx0f3c' target='_blank'>                    
                        <img src= {NumbLittleBug} alt="NumbLittleBug"></img>
                        </a>
                        <p className='text-center text-xl'>Numb Little Bug</p>
                    </td>

                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=4Jy_Z7a8S_o' target = '_blank'>                      
                        <img src= {Sabotage} alt="Sabotage"></img>
                        </a>
                        <p className='text-center text-xl'>Sabotage</p>
                    </td>                
                  </tr>

                <tr>
                    <td className='p-5'>
                        <a href ='https://www.youtube.com/watch?v=97AToHDppes' target = '_blank'>                     
                        <img src= {Wifey} alt="Wifey"></img>
                        </a>
                        <p className='text-center text-xl'>Wifey</p>
                    </td>

                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=QxTgr11ncJo' target = '_blank'>                     
                        <img src= {AllNight} alt="AllNight"></img>
                        </a> 
                        <p className='text-center text-xl'>All Night</p>
                    </td>

                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=5LvHjxBYTEo' target = '_blank'>                    
                        <img src= {redesign} alt="redesign"></img>
                        </a>
                        <p className='text-center text-xl'>redesign</p>
                    </td>

                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=JsOVJ1PAC6s' target = '_blank'>                     
                        <img src= {AboutDamnTime} alt="AboutDamnTime"></img>
                        </a> 
                        <p className='text-center text-xl'>About Damn Time</p>
                    </td>

                    <td className='p-5'>
                        <a href = 'https://www.youtube.com/watch?v=ogkyyPbun_U' target = '_blank'>                    
                        <img src= {TooClose} alt="TooClose"></img>
                        </a>
                        <p className='text-center text-xl'>Too Close</p>
                    </td>
                </tr>
              </tbody>
            </table>
    
          </div>
        </div> 
      </div> 
      

    )     
}
export default Favs
