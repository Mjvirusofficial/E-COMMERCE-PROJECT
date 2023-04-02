import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Categories from '../../Component/Category/Category';
import './Services.css'
function Service() {

  // When user not Login the redirect into login page
  const navigate = useNavigate()

  useEffect(() => {
    let user = localStorage.getItem('username')
    if (user === '' || user === null) {
      navigate('/auth')
    }
  })


  const [data, setData] = useState();


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories').then((res) => {
      return res.json().then(i => {
        setData(i);
        console.log(i)
      })
    })
  }, [])

  return (
    <>
      <div className="container">
        <h1 className='head text-center' >Welcome to online Shoping...</h1>
      </div>

      <div className="m-5">
        <div className="row gy-3">
          <Categories
            Categories={'All Product'}
            link={`/products`}
          />
          {data &&

            data.map((name, i) => {
              console.log(name)
              return <Categories
                key={i}
                Categories={name}
                link={`/products/${name}`}
              />

            })
          }
        </div>
      </div>
    </>
  )
}

export default Service;