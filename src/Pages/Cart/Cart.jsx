import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './Cart.css';


function Cart() {


// When user not Login the redirect into login page
const navigate = useNavigate()

useEffect(() => {
  let user = localStorage.getItem('username')
  if (user === '' || user === null) {
    navigate('/auth')
  }
})
    // const { productId } = useParams()

    const id = sessionStorage.getItem('id')
    // const { name } = useParams();

    // const [render, setRender] = useState([])
    // const [data, setData] = useState()
    // const [price, setP] = useState(1)

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`).then(res => {
            return res.json();
        }).then(i => {
            // data.push(i)
            // setData(i)
            console.log(i)
        })
    })


    const {
        items,
        // totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        isEmpty,
    } = useCart();


    return (
        <div >
            <div className="container col-12" >
                <div className="row">
                <h2 className='container mt-4'>My Cart<br/>Total Items: {totalUniqueItems}</h2>
</div>
                {/* <h1 className='container' style={{alignItems:'right'}}>Total Items: {totalItems}</h1> */}

            </div>

            <div className="container col-11 shopCartBox forcard">

                <div className="row py-3">





                    { isEmpty ?  <h1>Your cart is empty</h1> :
                        items.map(i => {
                            return <div className="container  mb-3">
                <div className="row  ">
                    <div className="col-6 col-lg-2 ">
                        <div className="card  ">
                            <img src={i.image} alt="" className="card-img-top cart-image" />
                            <hr style={{color:'black'}} />
                            <div className="box4priceINCDEC">
                                <h2 onClick={() => updateItemQuantity(i.id, i.quantity-1)} className='btn4btn'>-</h2>
                                <h2 className='card-text price'>{i.quantity}</h2>
                                <h2 onClick={() => updateItemQuantity(i.id, i.quantity+1)} className='btn4btn'>+</h2>
                                {/* <button onClick={() => removeItem(item.id)}>&times;</button> */}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                    <h2 className='card-title'>{i.title}</h2>
                    <h2 style={{textTransform:'capitalize'}} className='card-title'>{i.category}</h2>
                    <h2 className='card-text price'>&#8377;{i.price}</h2>
                    <button onClick={() =>  removeItem(i.id)} className='btn btn-warning mt-3'>Remove</button>
                    </div>
                </div>
            </div>
                        })
                    }
                </div>


            </div>
                <h1 className="t-price" >
                    Total Price:- &#8377;{cartTotal}
                </h1>
        </div>



    )
}

export default Cart;

