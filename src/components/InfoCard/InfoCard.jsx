

import React, { useState } from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons"
import { ProfileModel } from '../ProfileLeft/ProfileModel/ProfileModel'
const InfoCard = () => {

    const [modelOpend, setModelOpend] = useState(false)
    return (
        <div className='InfoCard'>
            <div className='infohead'>
                <h4>Your Info</h4>
                <div>
                    <UilPen width="2rem" height="1.2rem" onClick={() => setModelOpend(true)} />
                    <ProfileModel modelOpend={modelOpend} setModelOpend={setModelOpend} />
                </div>
            </div>
            <div className='info'>
                <span>
                    <b>status {" "}</b>
                </span>
                <span>In Relationship</span>
            </div>
            <div className='info'>
                <span>
                    <b>Live in {" "}</b>
                </span>
                <span>Paris</span>
            </div>
            <div className='info'>
                <span>
                    <b>Work at {"   "}</b>
                </span>
                <span>Zainkeepscode inst</span>
            </div>
            <button className='button logout-button'>Logout</button>
        </div>
    )
}

export default InfoCard