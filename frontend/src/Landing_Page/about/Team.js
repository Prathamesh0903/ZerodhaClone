import React from 'react';
function Team() {
    return ( 
        <div className='container'>
               <div className='row p-4 mt-5 border-top mb-5'>
                <h2 className='text-center mb-5' >Team Members</h2>
                <div className='row p-2 ' style={{margin:"0 auto"}}>
                  <div className='col-3'>
                    <img src='media/images/sahil.jpg' style={{width:"80%", height:"65%", borderRadius:"100%"}}></img>
                    <h3 className='mx-4 mt-3'>Sahil Gawade</h3>
                  <h5 style={{marginLeft:"6rem"}}>03</h5>
                  </div>
                  <div className='col-3'>
                  <img src='media/images/my.jpg' style={{width:"80%",height:"65%",borderRadius:"100%"}}></img>
                  <h3 className='mx-4 mt-3'>Prathamesh Pawar</h3>
                  <h5 style={{marginLeft:"6rem"}}>06</h5>
                  </div>
                  <div className='col-3'>
                  <img src='media/images/sau.png' style={{width:"80%",height:"65%",borderRadius:"100%"}}></img>
                  <h3 className='mx-4 mt-3'>Saurabh Karande</h3>
                  <h5 style={{marginLeft:"6rem"}}>09</h5>
                  </div>
                  <div className='col-3'>
                  <img src='media/images/aditya.jpg' style={{width:"80%",height:"65%",borderRadius:"100%"}}></img>
                  <h3 className='mx-4 mt-3'>Aditya Kakade</h3>
                  <h5 style={{marginLeft:"6rem"}}>10</h5>
                  </div>
                </div>
    </div>
        </div>
     );
}

export default Team;