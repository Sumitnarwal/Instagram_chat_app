


import "./ProfileCard.css"
import React from 'react'
import Cover from "../img/cover.jpg"
import Profile from "../img/profileImg.jpg"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const ProfileCard = ({ location }) => {
 // const ProfilePage = false
  const posts = useSelector((state) => state.postReducer.posts)
  const { user } = useSelector((state) => state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        {  /* <img src={Cover} alt="cover" />*/}
        <img src={
          user.coverPicture
            ? serverPublic + user.coverPicture
            : serverPublic + "defaultCover.jpg"
        } alt="CoverImage" />
        {    /*  <img src={Profile} alt="profile" /> */}
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
        <img />
      </div>
      <div className="ProfileName">
        <span>{user.firstname}{" "} {user.lastname}</span>  <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>   </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>  </div>
          {location === "profilePage" && (
            <>
              <div className="vl">
              </div>
              <div className="follow">
                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? ("") : (<span>
        <Link style={{ textDecoration: "none", color: "inherit" }} to={`/profile/${user._id}`} > My Profile</Link>
      </span>)}
    </div>
  )
}

export default ProfileCard