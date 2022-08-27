

import Comment from "../../img/comment.png"
import Noti from "../../img/noti.png"
import Home from "../../img/home.png"
import { UilSetting } from "@iconscout/react-unicons"
import React, { useState } from 'react'
import "./RightSide.css"
import TrendCard from "../TrendCard/TrendCard"
import { ShareModel } from "../ShareModel/ShareModel"
import { Link } from "react-router-dom"
const RightSide = () => {
    const [modelOpend, setModelOpend] = useState(false)
    return (
        <div className='RightSide'>
            <div className="navIcons">
                <Link to={"../home"}>
                    <img src={Home} alt="" />
                </Link>
                <UilSetting />
                <img src={Noti} alt="" />
                <Link to={"../chat"}>
                <img src={Comment} alt="" />
                </Link>
            </div>
            <TrendCard />

            <button onClick={() => setModelOpend(true)}
                className="button r-button">
                Share</button>
            <ShareModel modelOpend={modelOpend} setModelOpend={setModelOpend} />
        </div >
    )
}




export default RightSide;







