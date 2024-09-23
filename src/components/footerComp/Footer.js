import React from 'react';
import './Footer.scss';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column brand">
             <img src="\images\footer-logo-img.png" alt="Brian Bell Trade Electrical" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, magna ut lobortis cursus</p>
          <p>+675 325 5300</p>
          <p><a href="mailto:sales.bbt@briandelectrical.com.pg">sales.bbt@briandelectrical.com.pg</a></p>
        </div>

        <div className="footer-column categories">
          <h4>Shop by category</h4>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Sit amet consectetur</li>
            <li>Adipiscing elit</li>
            <li>Sed commodo ullamcorper</li>
          </ul>
        </div>

        <div className="footer-column categories">
          <h4>Shop by category</h4>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Sit amet consectetur</li>
            <li>Adipiscing elit</li>
            <li>Sed commodo ullamcorper</li>
          </ul>
        </div>

        <div className="footer-column categories">
          <h4>Shop by category</h4>
          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Sit amet consectetur</li>
            <li>Adipiscing elit</li>
            <li>Sed commodo ullamcorper</li>
          </ul>
        </div>

        <div className="footer-column links">
          <h4>About</h4>
          <ul>
            <li>Contact Us</li>
            <li>Locations</li>
            <li>My Account</li>
          </ul>
        </div>
      </div>

      <div className="footer-locations">
       
        <div className="locations-list">
        <h4>Locations</h4>
          <div className='location-list-content'>                                                             
            <h5>Port Moresby</h5>
            <span>Munahu Street, Gordons</span>
            <span>+675 325 5300</span>
            <span>8am - 5pm (Mon-Fri)</span>
              <span>8am - 12pm (Sat)</span>
          </div>
          <div className='location-list-content'>
            <h5>LAE</h5>
            <span>Air Corps Road</span>
            <span>+675 472 1933</span>
            <span>8am - 5pm (Mon-Fri)</span>
            <span>8am - 12pm (Sat)</span>
          </div>
          <div className='location-list-content'>
            <h5>Mt Hagen</h5>
            <span>Paraka Place</span>
            <span>+675 542 3075</span>
            <span>8am - 5pm (Mon-Fri)</span>
            <span>8am - 12pm (Sat)</span>
          </div >
          <div className='location-list-content'>
            <h5>Kimbe</h5>
            <span>Morokea Road</span>
            <span>+675 983 4206</span>
            <span>8am - 5pm (Mon-Fri)</span>
            <span>8am - 12pm (Sat)</span>
          </div>
          <div className='location-list-content'>
            <h5>Kokopo</h5>
            <span>Takubar Industrial Estate</span>
            <span>+675 982 9154</span>
            <span>8am - 5pm (Mon-Fri)</span>
            <span>8am - 12pm (Sat)</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2024 Brian Bell Group.</p>
        <div className="footer-links">
          <a href="#">Shipping & Returns Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
