import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map= 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15857.578163865612!2d3.3086787999999996!3d6.471605149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1664457601161!5m2!1sen!2sng width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'  
  return (
    <>
      <Back title='Contact Us'/>
      <section className="contact padding">
          <div className="container shadow flexSB">
              <div className="left row">
                  <iframe src={map}></iframe>
              </div>
              <div className="right row">
                  <h1>Contact Us</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                  <div className="items grid2">
                      <div className="box">
                          <h4>Address: </h4>
                          <p>198 west 21st street, suite 751 New York NY 10016</p>
                      </div>
                      <div className="box">
                          <h4>Email:</h4>
                          <p>info@gmail.com</p>
                      </div>
                      <div className="box">
                          <h4>Phone:</h4>
                          <p>+234 708 519 4964</p>
                      </div>
                  </div>

                  <form action="">
                      <div className="flexSB">
                          <input type="text" placeholder='Name' />
                          <input type="email" placeholder='Email' />
                      </div>
                      <input type="text" placeholder='Name' />
                        <textarea cols="30" rows="10">
                            Create a message here...
                        </textarea>
                        <button className='primary-btn'>SEND MESSAGE</button>
                  </form>
                  <h3>Follow us here</h3>
                  <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
              </div>
          </div>
      </section>
    </>
  )
}

export default Contact
