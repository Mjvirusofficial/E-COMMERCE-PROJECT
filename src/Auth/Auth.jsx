import React, { useEffect, useState } from 'react';
import './Auth.css';
// import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Auth() {

  const [show, setShow] = useState(false)
  const [data, setData] = useState()
  // const [data, setData] = useState({username:'',email:'',password:''})


  const navigate = useNavigate()
  function WhenClick() {
    setShow(!show)
  }

  useEffect(() => {
    localStorage.clear()
  }, [])

  // const url = 'http://localhost:3000/user';
  // const url = 'https://mjvirusofficial.github.io/API/ecommerce.json';

  // function Register() {

  //   if (!data.username) {
  //     alert('Username required')
  //   }

  //   else if (!data.password) {
  //     alert('Password required')
  //   }

  //   else {
  //     fetch(url, {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {
  //         'content-Type': 'application/json'
  //       }
  //     }).then(() => {
  //       console.log(data)
  //       setShow(!show)
  //     })
  //   }

    
  // }


  // function Login(){
  //   fetch('http://localhost:3000/user').then(res =>{
  //       return res.json();
  //      }).then(i =>{
  //       if(i.username === data.username){
  //           if(i.password === data.password){
  //               alert('Login Successfully')
  //               localStorage.setItem('user',i.username)
  //               navigate('/service')
  //           }

  //           else{
  //               alert('Enter valid password')
  //           }
  //       }

  //       else{
  //           alert('Enter valid username')
  //       }
  //      })
  //   }


function Register(){
  localStorage.setItem('username', data.username )
  localStorage.setItem('password', data.password )
  setShow(false) 
  toast.success('Registration Successfull')

}


function Login(){
   let username = localStorage.getItem('username')
   let password = localStorage.getItem('password')

   
    if(username === data.username && password === data.password){
    toast.success('Login Successfully')
    navigate('/service')
   } else if(data.username === '' || data.username == null){
    toast.warning('Username & password required')
   }
   
   else{
    toast.error('Credential not valid')
    setShow(!false) 
   }

}



  return (
    <div>
      <div className="container">
        <div className="row mb-5">
          <h1 className='text-center mt-4 ' style={{zIndex:'50px'}}>Welcome to MyShop</h1>
          {/* <h3 style={{marginBootom:'50px'}} className='text-center mb-5'>{show ? 'Register' : 'Login'}</h3> */}

        </div>

        <div className="container ">
          <div className="row">

          <div className="col-12 col-md-6  col-lg-6 ">
            <img style={{height:'50vh', marginTop:'-20px'}} className=' img-fluid' src="https://quantumhunts.com/user/assets/images/hero/hiring-manager-quantumhunts.gif" alt="" />
          </div>

            <div className="col-10 col-lg-6 mx-auto" style={{marginTop:'45px'}}>
              <div className="inof">
              </div>
              <div className="input-group">
                <input  onChange={(e) => { setData({ ...data, username: e.target.value }) }} type="text" className='form-control' autoFocus  placeholder='Username' required />
              </div>
              {show && <div className="input-group">
                <input  onChange={(e) => { setData({ ...data, email: e.target.value }) }} type="email" className='form-control' placeholder='Email' required />
              </div>}
              <div className="input-group">
                <input  onChange={(e) => { setData({ ...data, password: e.target.value }) }} type="password" className='form-control' placeholder='Password' required />
              </div>
              <div className="mt-3">

                {
                  show ? <button onClick={Register} type="" className='btn btn-success '>{show ? "Register" : "Login"}</button> : <button onClick={Login} type="button" className='btn btn-primary '>{show ? "Register" : "Login"}</button>
                }

                <span onClick={WhenClick} className='m-2 mj ' style={{ cursor: 'pointer' }}>
                  {
                    show ? 'Already have an account? Login' : "Don't have an account? Register"
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth