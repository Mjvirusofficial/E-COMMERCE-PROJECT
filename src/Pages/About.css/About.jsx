import React from 'react'

function About() {
  return (
    <div>
      <div className="container">
        

        <div className="container ">
          <div className="row">

            <div className="col-12 col-md-6  col-lg-6 ">
              <img style={{ height: '50vh'}}  className=' img-fluid' src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" alt="" />
            </div>
            <div className="col-12 col-lg-6 mx-auto container mt-3">
            <p>Hy, This is Deepak Ravidas & i'm from Bokaro Jharkhand.</p>
            <p>Currently studing in B.tech Madhya Pradesh Bhopal.</p>
            <p>This is my 2nd project and <span><a href="https://github.com/shivamsoni8813" style={{textDecoration:'none', color:'green'}}>Shivam</a></span> helped me to complete this project❤️ <b/>He give me the best idea to work with Auth API.</p>
           <div className="">
           <a href='https://mjvirus.netlify.app/'  className='start_shop sm-text-center mb-5' >More About me</a>

           </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About