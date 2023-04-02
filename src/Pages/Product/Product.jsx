import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card2 from '../../Component/Card2/Card2';
import './Product.css';

function Product() {
  
    const {name} = useParams();
    // const {id} = useParams();


    const [data,setData] = useState();
    
   
    useEffect(() =>{
        // let url2 = 'https://api.escuelajs.co/api/v1/products'
        let url = name ?`https://fakestoreapi.com/products/category/${name}`:  `https://fakestoreapi.com/products/`;
        fetch(url).then(res =>{
            return res.json();
        }).then(i =>{
            setData(i)
            console.log(i)
        })
    },[])



  return (
    <div> 
    {/* onChange={(e) =>{search(e)}} */}
       <div className="container-fluid" style={{marginTop:'90px' ,marginRight:'',justifyContent:'space-between',alignItems:'center'}}>
       {/* <input type="text "  placeholder='Search...'  style={{marginLeft:'12px'}}/> */}
       <h1 className='text-center' style={{textTransform:'capitalize',marginRight:"12px"}}>{name ? name : 'All Product'} </h1>
       </div>

       <div className="container-fluid mt-5">
        <div className="row gy-4" >
            { data &&
                data.map(i =>{
                    return <Card2
                        single={`/products/${name}/${i.id}`}
                        img={i.image}
                        title={i.category}
                        price={i.price}
                    />
                })
            }
        </div>
       </div>
    </div>
  )
}

export default Product