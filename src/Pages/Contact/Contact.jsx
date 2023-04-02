import React from 'react'

function Contact() {
  return (
    <div className='' style={{height:'66vh'}}>
    
      <div className="mx-5 ">
        <h1 className='text-center'>Contact Us</h1>
      </div>
       
        <div className="container ">
        <form action="https://formspree.io/f/mnqryjzv" method='POST' >

          <div className="row">
            <div className="col-10 col-md-6 col-lg-5 mx-auto mb-2">
              <div class="mt-4 ">
                <label for="exampleFormControlInput1" className="form-label">Full name</label>
                <input type="email" className=" form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>
              <div class="">
                <label for="exampleFormControlInput1" className="form-label">Phone no</label>
                <input type="email" className=" form-control" id="exampleFormControlInput1" placeholder="Mobile number" />
              </div>
              <div class="">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className=" form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea class=" form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mt-2">
                <button className="btn btn-success" type="submit">Submit</button>
              </div>
            </div>
          </div>
          </form>
        </div>
        
      </div>
      )
}

      export default Contact