

import Comment from "../../img/comment.png"
import Noti from "../../img/noti.png"
import Home from "../../img/home.png"
import { UilSetting } from "@iconscout/react-unicons"
import React, { useState } from 'react'
import "./RightSide.css"
import TrendCard from "../TrendCard/TrendCard"
import { ShareModel } from "../ShareModel/ShareModel"
const RightSide = () => {
    const [modelOpend, setModelOpend] = useState(false)
    return (
        <div className='RightSide'>
            <div className="navIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
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






