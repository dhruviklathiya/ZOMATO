import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import User_banner from './User_banner'

const User_view = () => {

    const [data, setdata] = useState([])
    const [cart, setcart] = useState([])


    const arr = JSON.parse(localStorage.getItem("detail")) || []
    const cart_arr = JSON.parse(localStorage.getItem("cart")) || []

    useEffect(() => {
        setdata([...arr])
        setcart([...cart_arr])
    }, [cart])

    const cart_add = (val_, ind_) => {
        cart_arr.push(arr[ind_])
        localStorage.setItem("cart", JSON.stringify(cart_arr))
        setcart([...cart_arr])
        Swal.fire({
            title: "Item added to cart successfully !",
            icon: "success"
        })
    }

    return (
        <>
            {/* BANNER */}
            <User_banner />
            {/* FOOD */}
            <div className="h2_wrap"><h2 align="center"> Available food </h2></div>
            <div className='d-flex flex-wrap'>
                {
                    data?.map((val_, ind_) => {
                        return (
                            <>
                                <div className='col-4 my-3'>
                                    <div class="card">
                                        <div class="card-body">
                                            <img class="card-img-top mb-3" src={val_.product_img} />
                                            <h5 class="card-title">{val_.product_name}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">${val_.product_price}</h6>
                                            <button className='btn btn-outline-info' onClick={() => cart_add(val_, ind_)}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default User_view