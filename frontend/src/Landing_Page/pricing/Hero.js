import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
       <div className='text-center border-bottom mt-4 p-5'>
        <h1 className='mb-3'>Pricing</h1>
        <h3 className='text-muted fs-5'>Free equity investments and flat ₹20 traday and F&O trades  </h3>
       </div>
       <div className='row p-5  text-center' >
        <div className='col-4  p-5'>
        <img src='media/images/pricingEquity.svg' alt='img'/>
          <h1 className='fs-3'>Free equity delivery</h1>
          <p text-muted>All equity delivery investments (NSE, BSE), are absolutely free — ₹
          0 brokerage.</p>
        </div>
        <div className='col-4 p-5'>
           <img src='media/images/intradayTrades.svg' alt='img'/>
           <h1 className='fs-3'>Intraday and F&O trades</h1>
           <p className='text-muted'> Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
           intraday trades across equity, currency, and commodity trades.</p>
        </div>
        <div className='col-4 p-5'>
        <img src='media/images/pricingEquity.svg' alt='img'/>
           <h1 className='fs-3'>Free direct MF</h1>
           <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0
           commissions & DP charges.</p>
        </div>
       </div>
        </div>
     );
}

export default Hero;