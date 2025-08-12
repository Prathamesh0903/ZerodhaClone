import React from 'react';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,   
}) {
    return ( 
        <div className='container mb-5'>
        <div className='row border-top'>
            <div className='col-5 p-5'>
                <img src={imageURL}/>
            </div>
            <div className='col-1'></div>
            <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a className='mx-3' href={tryDemo}>Try Demo</a>
                <a href={learnMore}>Learn More</a>
                </div>
                <div className='mt-3'>
                <a className='mx-3' href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                <a href={appStore}><img src="media/images/appstoreBadge.svg"/></a>
                </div>
                
            </div>
        </div>
        </div>
        
     );
}

export default LeftSection;