import React from 'react';
import "./../subscribeComp/Subscribe.scss";

const Subscribe = () => {
  return (
    <div className='subscribe-container-box'>
        <div className='subscribe-container'> <span className='subscribe-heading-name'>Subscribe to Our Newsletter</span>
        <span className='subscribe-content'>Lorem ispsum dolor amet consectetur. consectetur sit morbi nunc quam non arcu. Elit imperdiet phareta eget consectetur diam</span>
</div>
        <div className='email-btn-alignment'>
            <span style={{width:"50vh"}}><input type="email" placeholder="Enter your email address" className='input-box'/></span>
            <span><input type="button" placeholder='Subscribe' value="Subscribe" className='btn-subscribe'/></span>
        </div>
      
    </div>
  )
}

export default Subscribe;
