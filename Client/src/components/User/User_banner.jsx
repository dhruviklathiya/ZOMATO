import React from 'react'
import './User_banner.css'
import banner from '../../../public/banners/banner1.jpg'

const User_banner = () => {
    return (
        <div className="banner">
            <div className="bannerInner">
                <img src={banner} alt="banner" className="bannerImg" />
                <div className="bannerTxt">
                    <div className="title">Tomato</div>
                    <div className="tag">Discover the best food & drinks in <span className="bld"> your city</span></div>
                    <div className="searchbar">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_banner