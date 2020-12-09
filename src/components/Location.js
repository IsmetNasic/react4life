import React from 'react';
import './Location.css';


function Location(){

    return (
      <>
        <div className='location-container'>
            <div className='map-container'>
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.599925225757!2d-2.333385683968076!3d53.72538915395238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9f32c1995dc5%3A0x15b075e0613d6d8c!2sFit4Life%20Health%20and%20Fitness!5e0!3m2!1sen!2sba!4v1606772171969!5m2!1sen!2sba" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe></p>
            </div>
            <div className='input-container'>
                <h1>Contact Us</h1>
                <form className='form-container'>
                  <input className='contact-input' type="text" placeholder='name' />
                  <input className='contact-input' type="text" placeholder='email' />
                  <textarea className='input-message' type="text" placeholder='message' />
                  <button type="submit" value="Submit">Send</button>
              </form>
            </div>
        </div>
      </>
    );
  }
  
  export default Location;