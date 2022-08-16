
import React from 'react'
import ProfileCard from '../../ProfileCart/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'

import LogoSearch from '../LogoSearch/LogoSearch'
import "./ProfileSide.css"
const ProfileSide = () => {
    return (
        <div className='ProfileSide'>
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileSide