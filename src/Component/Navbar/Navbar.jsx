import React from 'react';
import './Navbar.css';
import { NavLink} from 'react-router-dom'


function Navbar(props) {
    


    function logout(){
      return  localStorage.clear()
    }

    const user = localStorage.getItem('username')

    return (
        <div className='' style={{marginBottom:'10vh'}}>
            <nav className="navbar navbar-expand-lg fixed-top" style={{height:'9vh', background:'white'}}>
                <div className="container-fluid" style={{background:'white', }}>
                    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <NavLink className="navbar-brand logo mx-auto" style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}} to="/"><span className="virus">Mjvirus</span><span className=''>official</span></NavLink>
                    &nbsp;
                    <NavLink to='/cart'><i data-bs-toggle="collapse" class=" fa-solid fa-cart-shopping" style={{fontSize:'2rem', color:'green'}}></i></NavLink>
                    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul  className=" navbar-nav ms-auto  mb-lg-0 mt-4" >
                            <li className="nav-item abcd">
                                <NavLink activeClassName='menu_active' className="nav-link active menu  " aria-current="page" to='/'><p className='pages'>Home</p></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='menu_active' className="nav-link active menu js-scroll-triger" to="/service"><p className='pages'>Services</p></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='menu_active' className="nav-link active menu js-scroll-triger" to="/about"><p className='pages'>About Us</p></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='menu_active' className="nav-link active menu js-scroll-triger" to="/contact"><p className='pages'>Contact us</p></NavLink>
                            </li>

                            <li className="nav-item">
                            
                                {
                                    user ? <a activeClassName='menu_active' className="nav-link active menu" href="/"><p onClick={logout} className="pages auth">Logout</p></a> : <a activeClassName='menu_active' className="nav-link active menu" href="/service"><p className="pages auth">Login</p></a>
                                }
                            
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            {/* <div className="user-detail">
                            <ul className='navbar-nav '>
                            <li className="nav-item">
                                <NavLink activeClassName='menu_active' className="nav-link active menu" to="/"><User/></NavLink>
                            </li>
                            </ul>
                        </div> */}
        </div>
    )
}

export default Navbar;