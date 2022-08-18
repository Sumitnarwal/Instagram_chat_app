


import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../ProfileCart/ProfileCard'
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft.jsx"
import "./Profile.css"
import RightSide from '../../components/RightSide/RightSide'
const Profile = () => {
    return (
        <div className='Profile'>
            <ProfileLeft />
            <div className='Profile-center'>
                <ProfileCard location="profilePage"/>
                <PostSide />
            </div>
            <RightSide/>
        </div>
    )
}

export default Profile









