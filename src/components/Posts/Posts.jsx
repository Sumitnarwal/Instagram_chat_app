

import { React, useEffect } from 'react'
import PostShare from '../PostShare/PostShare'
import { PostData } from '../../Data/PostData'

import "./Posts.css"
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../Actions/postAction'
import { useParams } from 'react-router-dom'
const Posts = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)
    let { posts, loading } = useSelector((state) => state.postReducer)

    useEffect(() => {
        dispatch(getTimelinePosts(user._id))
    }, []);
    if(!posts) return 'No Posts';
    if(params.id) posts = posts.filter((post)=> post.userId===params.id)
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