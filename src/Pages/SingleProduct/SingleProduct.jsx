import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';
// import { useCart } from 'react-use-cart';
import './SingleProduct.css'

function SingleProduct() {

    const {addItem} =useCart();


    const { productId } = useParams()

    // const { name } = useParams();

    const [Data, setData] = useState();

    function add(){
        toast.success('Item added successfully')
    }


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`).then(res => {
            return res.json();
        }).then(i => {
            setData(i)
            console.log(i.price)
            console.log(i.id)
            sessionStorage.setItem('id',i.id)
        })
    })

    return (
        <>
            <div style={{ marginTop: '90px' }}>

<div className="containe mb-5">
    <h1 className='text-center'>Product Detail</h1>
</div>
<div className="container">
    <div className="row">
        <div className="col-11 mx-auto col-lg-8 ">
            <div className="card" >
                <img src={Data && Data.image} className='card-img-top ' style={{ height: '80vh' }} alt="" srcset="" />
                <div className="card-body">
                    <h4 className='card-title' style={{ color: 'black', textTransform: 'capitalize' }}>{Data && Data.title}</h4>
                    <h2 className='card-title' style={{ color: 'black' }}>&#8377;{Data && Data.price}</h2>
                    <p className='card-title' style={{ color: 'black' }}>{Data && Data.description}</p>

                    <NavLink onClick={() => addItem(Data && Data)}  className="nav-link active btn btn-primary sing" aria-current="page" to={`/cart`}><h2 onClick={add}  className='learn'>Add to cart</h2></NavLink>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        </> 
    )
}

export default SingleProduct;