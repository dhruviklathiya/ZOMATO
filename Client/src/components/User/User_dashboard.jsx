import React, { useEffect, useRef, useState } from 'react'
import User_Navbar from '../Navbar/User_Navbar'
import User_cart from './User_cart'
import User_view from './User_view'

const User_dashboard = () => {

    return (
        <>
            <User_Navbar />
            <User_view />
            <User_cart />
        </>
    )
}

export default User_dashboard