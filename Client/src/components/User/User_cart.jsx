import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

const User_cart = () => {

    let total = 0
    const [data, setdata] = useState([])
    const [cart, setcart] = useState([])

    const arr = JSON.parse(localStorage.getItem("detail")) || []
    const cart_arr = JSON.parse(localStorage.getItem("cart")) || []

    useEffect(() => {
        setdata([...arr])
        setcart([...cart_arr])
    }, [cart])


    const cart_item_remove = (ind_) => {
        cart_arr.splice(ind_, 1)
        localStorage.setItem("cart", JSON.stringify(cart_arr))
        setcart([...cart_arr])
        Swal.fire({
            title: "Item removed from cart successfully !",
            icon: "success"
        })
    }

    return (
        <>
            <div className="h2_wrap"><h2 align="center">Cart</h2></div>
            <div className='d-flex flex-wrap'>
                {
                    cart?.map((val_, ind_) => {
                        total += Number(val_.product_price)
                        return (
                            <>
                                <div className='col-4 my-3'>
                                    <div class="card">
                                        <div class="card-body">
                                            <img class="card-img-top mb-3" src={val_.product_img} />
                                            <h5 class="card-title">{val_.product_name}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">${val_.product_price}</h6>
                                            <button className='btn btn-outline-info' onClick={() => cart_item_remove(ind_)}>Remove from cart</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="h2_wrap"><h2 align="center">Total: ${total}</h2></div>
        </>
    )
}

export default User_cart