import React from 'react';
import "./Main.scss";

const Main = () => {
  return (
    <div className='main-container'>

      <div className='about-us-container'>

        <img src="\images\about-us-vector.png"  className='vector-image-about'/>

<div className='about-us-content'>
<div className='home-tool-content'>
    <span className='home-about-text'>Home / About</span>
    <span className='tool-power-text'>Tools / Power Tools</span>
    </div>
    <span className='home-about-heading'>About Us</span>
    <div className='home-about-inside-content'>
      <span>Lorem ipsum dolor sit amet consectetur. Semper augue sed lectus amet.</span>
    
    <span>Libero nibh massa semper ut auctor ac.</span> </div>
</div>

<img src="\images\aboutUS.png" className='about-us-image'/>

      </div>

      <div className='left-right-Cta-section'>
      <img src="\images\main_back.png"  className='main-bottom-vector-image'/>
<div className='right-ctc-container'>
    <img src="\images\rightcta.png"  className='right-cta-image'/>
    <div className='cta-content-right'>
        <img src="\images\Frame.png"  width="10%" height="5%"/>
        <h2>Right CTA Section</h2>
        <div className='right-cta-content'>
        <p>
        Lorem ipsum dolor sit amet consectetur. Eu sit velit orci mi. Non odio massa enim tortor magna sapien semper et. In suspendisse facilisi mattis ut lacus ut justo eu in. Leo vivamus ullamcorper vitae dignissim fermentum sagittis.
</p>
<p>Lorem ipsum dolor sit amet consectetur. Eu sit velit orci mi. Non odio massa enim tortor magna sapien semper et. In suspendisse facilisi mattis ut lacus ut justo eu in. Leo vivamus ullamcorper vitae dignissim fermentum sagittis.
        </p>
        </div>
    </div>

</div>

<div className='left-ctc-container'>
    <img src="\images\leftcta.png" className='right-cta-image' />
    <div className='cta-content'>
        <img src="\images\Frame.png"  width="10%" height="5%"/>
        <h2>Left CTA Section</h2>
        <div className='left-cta-content'>
        <p>
        Lorem ipsum dolor sit amet consectetur. Eu sit velit orci mi. Non odio massa enim tortor magna sapien semper et. In suspendisse facilisi mattis ut lacus ut justo eu in. Leo vivamus ullamcorper vitae dignissim fermentum sagittis.
</p>
<p>Lorem ipsum dolor sit amet consectetur. Eu sit velit orci mi. Non odio massa enim tortor magna sapien semper et. In suspendisse facilisi mattis ut lacus ut justo eu in. Leo vivamus ullamcorper vitae dignissim fermentum sagittis.
        </p>
        </div>
    </div>

</div>


      </div>
    </div>
  )
}

export default Main;
