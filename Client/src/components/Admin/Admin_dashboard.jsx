import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

const Admin_dashboard = () => {
    const product_name = useRef()
    const product_price = useRef()
    const product_img = useRef()

    const [data, setdata] = useState([])
    const [cart, setcart] = useState([])
    const [view, setview] = useState({})
    const [index, setindex] = useState()

    const arr = JSON.parse(localStorage.getItem("detail")) || []
    const cart_arr = JSON.parse(localStorage.getItem("cart")) || []

    useEffect(() => {
        setdata([...arr])
        setcart([...cart_arr])
    }, [])

    const submit_handle = () => {
        const input = {
            product_name: product_name.current.value,
            product_price: product_price.current.value,
            product_img: product_img.current.value,
        }
        if (input.product_name && input.product_price && input.product_img) {
            arr.push(input)
            localStorage.setItem("detail", JSON.stringify(arr))
            setdata([...arr])
            Swal.fire({
                title: "Item added successfully !",
                icon: "success"
            })
        }
    }

    const delete_handler = (ind_) => {
        arr.splice(ind_, 1)
        localStorage.setItem("detail", JSON.stringify(arr))
        setdata([...arr])
        Swal.fire({
            title: "Deleted successfully !",
            icon: "success"
        })
    }

    const view_handler = (ind_) => {
        setview(arr[ind_])
        setindex(ind_)
    }

    const update_input_handler = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    const update_handle = () => {
        if (view.product_name && view.product_price) {
            arr.splice(index, 1, view)
            localStorage.setItem("detail", JSON.stringify(arr))
            setdata([...arr])
            Swal.fire({
                title: "Updated successfully !",
                icon: "success"
            })
        }
    }

    return (
        <>
            <div className='col-6 offset-3 py-3 border border-dark rounded-5 mb-5 mt-5'>
                <input className='form-control my-4' type="text" name='product_name' placeholder='Product name' ref={product_name} />
                <input className='form-control my-4' type="number" name='product_price' placeholder='Product price' ref={product_price} />
                <input className='form-control my-4' type="text" name='product_img' placeholder='Product image link' ref={product_img} />
                <button className='d-block w-100 btn btn-outline-info' type='button' onClick={submit_handle}>Submit</button>
            </div>
            <div className='col-6 offset-3 py-3 border border-dark rounded-4 mb-5'>
                <input type="text" className='form-control my-4' name='product_name' placeholder='New product name' value={view.product_name} onChange={update_input_handler} />
                <input type="number" className='form-control my-4' name='product_price' placeholder='New product price' value={view.product_price} onChange={update_input_handler} />
                <input className='form-control my-4' type="text" name='product_img' placeholder='New product image link' value={view.product_img} onChange={update_input_handler} />
                <button type='button' className='d-block w-100 btn btn-outline-info' onClick={update_handle}>Update</button>
            </div>
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
                                            <button className='btn btn-outline-info mr-3' onClick={() => delete_handler(ind_)}>Delete</button>
                                            <button className='btn btn-outline-info' onClick={() => view_handler(ind_)}>Update</button>
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

export default Admin_dashboard