import React from 'react'
import { blog } from '../../dummydata'
import './footer.css'

const Footer = () => {
    return (
      <>
        <section className="newletter">
            <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter -Stay tune and get the latest update</h1>
                    <span>far far away, behind the word mountains</span>
                </div>
                <div className="right row">
                    <input type="text" placeholder='Enter email address'/>
                    <i className='fa fa-paper-plane'></i>
                </div>
            </div>
        </section>
        <footer>
            <div className="container padding">
                <div className="box">
                    <h3> Recent Post </h3>
                    {blog.slice(0,3).map((val) => {
                        return(
                            <div className="items flexSB" key={val.id}>  
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                  <span>
                                    <i className="fa fa-user"></i>
                                    <label htmlFor="">{val.type}</label>
                                  </span>
                                  <span>
                                    <i className="fa fa-calendar-alt"></i>
                                    <label htmlFor="">{val.date}</label>
                                  </span>
                                  <h4>{val.title}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            
            </div>
        </footer>
        <div className="legal">
            <p>Copyright @2022 All rights reserved | This template is made with <i className="fa fa-heart"></i> by Ace AE</p>
        </div>
      </>
    )
  }
  
  export default Footer;
  
