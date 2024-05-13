import React from 'react'
import { blog } from '../../dummydata'
import Title from '../common/title/Title'

const HBlog = () => {
  return (
    <div>
      <section className="blog">
          <div className="container">
              <Title subtitle='our blog' title='recent from blog'/>
              <div className="grid2">
              {blog.slice(0,3).map((val)=>{  //slice helps you to cut the numer of date from 0-whatver number you desire
         return(
             <div className="items shadow">
                 <div className="img">
                     <img src={val.cover} alt="" />
                 </div>
                 <div className="text">
                     <div className="admin flexSB">
                         <span>
                             <i className="fa fa-user"></i>
                             <label htmlFor="">{val.type}</label>
                         </span>
                         <span>
                             <i className="fa fa-calendar-alt"></i>
                             <label htmlFor="">{val.date}</label>
                         </span>
                         <span>
                             <i className="fa fa-comments"></i>
                             <label htmlFor="">{val.com}</label>
                         </span>
                     </div>
                     <h1>{val.title}</h1>
                     <p>{val.desc}</p>
                 </div>
             </div>
         )
     })}
              </div>
          </div>
      </section>
    </div>
  )
}

export default HBlog
