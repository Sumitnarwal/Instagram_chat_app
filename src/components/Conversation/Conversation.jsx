


import React, { useEffect, useState } from 'react'
import { getUser } from '../../Api/UserRequest'

const Conversation = ({ data, currentUserId }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)

        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                console.log(data)
            } catch (error) {
                console.log(error)
            }

        }
        getUserData()
    }, [])
    return (
        <div className='follower conversation'>
            <div className='online-dot'>
                <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER  } />
            </div>
        </div>
    )
}

export default Conversation
