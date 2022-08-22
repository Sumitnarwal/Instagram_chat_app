

import React, { useEffect, useState } from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons"
import { ProfileModel } from '../ProfileLeft/ProfileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import * as  UserApi from "../../Api/UserRequest.jsx"
import { logOut } from '../../Actions/AuthAction'
const InfoCard = () => {

    const [modelOpend, setModelOpend] = useState(false)

    const dispatch = useDispatch();
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
                //     console.log(user)
            }
            else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                //    console.log(profileUser)
            }
        }
        fetchProfileUser()
    }, [user])

    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div className='InfoCard'>
            <div className='infohead'>
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (
                    <div>
                        <UilPen width="2rem" height="1.2rem" onClick={() => setModelOpend(true)} />
                        <ProfileModel modelOpend={modelOpend} setModelOpend={setModelOpend} data={user} />
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div className='info'>
                <span>
                    <b>status {" "}</b>
                </span>
                <span>{profileUser.relationship}</span>
            </div>
            <div className='info'>
                <span>
                    <b>Live in {" "}</b>
                </span>
                <span>{profileUser.livesIn}</span>
            </div>
            <div className='info'>
                <span>
                    <b>Work at {"   "}</b>
                </span>
                <span> {profileUser.worksAt}</span>
            </div>
            <button className='button logout-button' onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default InfoCard