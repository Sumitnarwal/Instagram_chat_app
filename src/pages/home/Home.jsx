
import "./home.css"
///rafce
import React from 'react'
import ProfileSide from "../../components/profileSide/ProfileSide"
import PostSide from "../../components/PostSide/PostSide"
import RightSide from "../../components/RightSide/RightSide"

const Home = () => {
    return (
        <div className='Home'>

            {/**landing page divide into three part left(ProfileSide) middle(PostSide) right(Rightside) */}

            <ProfileSide />
            <PostSide />
            <RightSide />



        </div>
    )
}

export default Home