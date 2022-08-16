

import "./FollowersCard.css"
import React from 'react'
import { Followers } from "../../Data/FollowersData"
const FollowersCard = () => {
    return (
        <div className="FollowersCard">
            <h3>Who is following you </h3>
            {Followers.map((follwers, id) => {
                return (
                    <div className="follower">
                        <div >
                            <img src={follwers.img} alt="" className="followerImg" />
                            <div className="name">
                                <span>{follwers.name}</span>
                                <span>@{follwers.username}</span>
                            </div>
                        </div>
                        <button className="button fc-button">Follow</button>
                    </div>
                ) 
            })}
        </div>
    )
}

export default FollowersCard