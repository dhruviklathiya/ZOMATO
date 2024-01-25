import React, { useState } from 'react'
import css from "./App_download.css"
import mobileImg from '../../../public/images/mobile.png'
import playstoreImg from '../../../public/icons/appstore.png'
import appstoreImg from '../../../public/icons/playstore.png'
import User_Navbar from '../Navbar/User_Navbar'

const App_download = () => {
    let [inputType, setInpuutType] = useState(true);
    let [validInpt, setValidInpt] = useState(true);
    return (
        <>
            <User_Navbar />
            <div className="outerDiv">
                <div className="innerDiv">
                    <div className="leftSec">
                        <img className="mobileImg" src={mobileImg} alt="mobile img" />
                    </div>
                    <div className="rightSec">
                        <div className="title">Get the Tomato App</div>
                        <div className="tag">We will send you a link, open it on your phone to download the app</div>
                        <div className="inputBoxes">
                            <div className="radiosBtns">
                                <div className="radioBtn" onClick={() => setInpuutType(true)}>
                                    <input className="radio" type="radio" name="radio" id="email" defaultChecked={inputType} />
                                    <label className="label" htmlFor="email">Email</label>
                                </div>
                                <div className="radioBtn" onClick={() => setInpuutType(false)}>
                                    <input className="radio" type="radio" name="radio" id="phone" />
                                    <label className="label" htmlFor="phone">Phone</label>
                                </div>
                            </div>
                            <div className="inputs">
                                <div className="optionInputs">
                                    {inputType ? <div className="inputBox">
                                        <input className="input" type="email" name="email" id="email" placeholder='Email...' />
                                        {!validInpt ? <div className={[css.errMess,]}>Please enter your email id</div> : ''}
                                    </div> : <div className="inputBox">
                                        <input className="input" type="tel" name="phone" id="phone" placeholder='type here...' />
                                        {!validInpt ? <div className="errMess">Please enter your phone number</div> : ''}
                                    </div>}
                                </div>
                                <button className="btn">Share App Link</button>
                                {/* <button className="btn2" disabled>Share App Link</button> */}
                            </div>
                        </div>
                        <div className="appLinks">
                            <div className="title2">Download app from</div>
                            <div className="appBoxes">
                                <img className="appImg" src={appstoreImg} alt="appstore" />
                                <img className="appImg" src={playstoreImg} alt="playstore" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App_download