import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"


const Hero = () => {
  return (
    <>
      <section className="hero">
          <div className="container">
              <div className="row">
                  <Title subtitle= 'WELCOME TO ACADEMIA' title='Best Online Education'/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi rerum iure ratione animi itaque autem numquam in asperiores,
                    id quos nostrum qui voluptatem quas incidunt obcaecati soluta.
                    Aut, quam ducimus.</p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button className="primary-btn">
                            VIEW COURSE <i className ='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
              </div>
          </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
