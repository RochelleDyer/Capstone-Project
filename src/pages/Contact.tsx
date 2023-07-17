import Background from '../assets/images/contact.jpg'

function Contact() {
  return (
    <div style={{backgroundImage: `url(${Background})`}}
              className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen p-5' ></div> 
          <div className='mr-auto p-10'>
            <table>
            <ul>            
                <li><h3 className='p-5 text-white text-3xl'><u>Contact Us on:</u> </h3></li> 
                
                <li><i className="fa-brands fa-facebook text-lg text-white">  Facebook </i></li>             
                <br></br>                       
                <li><i className="fa-brands fa-twitter text-lg text-white"> Twitter </i></li>                  
                <br></br>          
                <li><i className="fa-brands fa-instagram text-lg text-white"> Instagram </i></li> 
                <br></br>
                <li><i className="fa-brands fa-snapchat text-lg text-white"> Snapchat </i></li>
                <br></br> 
                <li> <h3 className='p-5 text-white text-3xl'><u> Or Call Us at: </u> </h3></li>
             
                <li><i className="fa-solid fa-mobile text-lg text-white"> 555-555-5555 </i></li>
                <br></br> 
                <li><h2 className='text-white'> Hope to hear from you soon! </h2></li>
                <br></br>
                  
            </ul>  
            </table>
          </div>    
    </div>
  )
}

export default Contact
