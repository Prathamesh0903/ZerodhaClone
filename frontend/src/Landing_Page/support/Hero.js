import React from 'react';
function Hero() {
    return ( 
        <div className='container-fluid ' style={{backgroundColor:"rgb(56,126,209)", padding:"0 10rem"}}>
           <div className='row p-5'>
                <div className='col-5 p-3 'style={{color:"white", }}>
                    <h4 className='mb-5'>Support Portal</h4>
                   <h2 className='fs-4'>Search for an answer or browse help topics to create a ticket</h2>
                   <input className='text-muted' type='text' placeholder='Eg. how do I activate F&O,why is my order getting rejected' style={{height:"4rem", width:"32rem",margin:"4px 0",padding:"20px", borderRadius:"10px", border:"none"}}/> 
                   <br/>
                   <a style={{ color:"white", marginRight:"10px"}} href=''>Track account opening</a>
                   <a style={{ color:"white", marginRight:"10px"}} href="">Track segment activation</a> <br/>
                   <a style={{ color:"white", marginRight:"10px"}} href="">Intraday margins</a>
                   <a style={{ color:"white", marginRight:"10px"}} href="">Kite user manual</a>
                </div>
                <div className='col-2'></div>
                <div className='col-5 p-3 'style={{ color:"white"}}>
                    <a href=''style={{color:"White"}}>Track Tickets</a>
                   <h2 className='mt-5'>Featured</h2>
                   <ol>
                    <li className='mb-2'><a style={{ color:"white",lineHeight:"1.5"}} href=''>Track account opening</a> </li>
                    <li><a style={{ color:"white"}} href="">Track segment activation</a></li>
                   </ol>
                </div>
            </div>
        </div>
            
     );
}

export default Hero;