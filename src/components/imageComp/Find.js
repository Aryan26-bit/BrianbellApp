import React from 'react';
import "./../imageComp/Find.scss";

const Find = () => {
  return (
    <div className='find-out-more-container'>
      <img src="\images\find-out-more-vector.png" className='find-out-more-vector-image'/>
      <div style={{zIndex:"3"}}><img src="\images\rightcta.png" width="80%" height="80%" /></div>
      <div className='find-out-more-content-box'>
        <div className='find-out-more-heading'>
          
          
          <span>Lorem ipsum dolor</span> <span>sit amet consectetur</span></div>
        <span className='find-out-more-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </span>
        <span><button className='btn-find-more'>Find out More</button></span>
      </div>
    </div>
  )
}

export default Find;
