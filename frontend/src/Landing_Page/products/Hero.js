import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center p-5 mb-5'>
           <h1 className='mb-3'>Technology</h1>
           <h3 className='mb-3 text-muted fs-4'>Sleek,modern and intutive trading platforms</h3>
           <p>check out our {" "}
            <a href='' style={{textDecoration:"none"}}>investment offerings {" "}
             <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
           </a></p>
        </div>
     );
}

export default Hero;