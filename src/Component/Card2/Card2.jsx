import React from 'react'
import { NavLink } from 'react-router-dom';

function Card2(mj) {



    return (
        <>
            <div className="col-6 col-md-4 col-lg-4 " >
            <NavLink to={mj.single} className='text-decoration-none'>
            <div className="card" >
                <img src={mj.img} className='card-img-top ' style={{height:'300px'}}  alt="" srcset="" />
                <div className="card-body">
                    <h4 className='card-title' style={{color:'black',textTransform:'capitalize'}}>{mj.title}</h4>
                    <p className='card-title'  style={{color:'black'}}>&#8377;{mj.price}</p>
                </div>
            </div>
            </NavLink>
        </div>
            {/* <div className="col-6 col-md-4 col-lg-3 ">

                <img src={mj.img} class="card-img-top cardimg" alt="..." />
                <h4 className="title">{mj.title}</h4>
                <h4 className="title">{mj.price}</h4>

            </div> */}
        </>
    )
}

export default Card2;