import Background from '../assets/images/contact.jpg'

function Contact() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
              className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen p-5' ></div> 
          <div className='mr-60 p-10'>
            <table>
            <ul>            
                <li><h3 className='p-3 text-white text-3xl'><u>Contact Us on:</u> </h3></li> 
                
                <li><i className="fa-brands fa-facebook text-lg text-white">   Facebook </i>
                <p className = 'text-white'>www.facebook.com/DMA</p></li>             
                <br></br>                       
                <li><i className="fa-brands fa-twitter text-lg text-white"> Twitter </i>
                <p className = 'text-white'>www.twitter.com/DMA</p></li>                  
                <br></br>          
                <li><i className="fa-brands fa-instagram text-lg text-white"> Instagram </i>
                <p className = 'text-white'>www.instagram.com/DMA</p></li> 
                <br></br>
                <li><i className="fa-brands fa-snapchat text-lg text-white"> Snapchat </i>
                <p className = 'text-white'>www.snapchat.com/DMA</p></li>
                <br></br> 
                <li> <h3 className='p-5 text-white text-3xl'><u> Or Call Us at: </u> </h3></li>
             
                <li><i className="fa-solid fa-mobile text-lg text-white"> 555-555-5555 </i></li>
                 
                <li><h2 className='text-white'> Hope to hear from you soon! </h2></li>
            
                  
            </ul>  
            </table>
          </div>    
    </div>
  )
}

export default Contact
