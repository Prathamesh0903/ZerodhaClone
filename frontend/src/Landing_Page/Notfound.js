import {Link} from "react-router-dom";
import React from 'react';
function Notfound() {
    return ( 
        <div className='container p-5'>
        <div className='row text-center'>
         <h1 className='mt-5'>404 Not Found</h1>
         <p>Sorry, the page you are looking for does not Exist!!!</p>
         <Link to="/"><button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>Go to Home Page</button> </Link>
        </div>
        </div>
     );
}

export default Notfound;