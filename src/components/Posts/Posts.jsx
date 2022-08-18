

import { React, useEffect } from 'react'
import PostShare from '../PostShare/PostShare'
import { PostData } from '../../Data/PostData'

import "./Posts.css"
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../Actions/postAction'
const Posts = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.authReducer.authData)
    const { posts, loading } = useSelector((state) => state.postReducer)

    useEffect(() => {
        dispatch(getTimelinePosts(user._id))

    }, []);
    return (
        <div className='Posts'>
            { /* Post*/}
            {
                loading ? "Featching Posts...":
                posts.map((post, id) => {
                return <Post  data={post} key={id} />
            })}
        </div>
    )
}

export default Posts 