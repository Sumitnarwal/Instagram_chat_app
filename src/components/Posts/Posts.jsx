

import React from 'react'
import PostShare from '../PostShare/PostShare'
import { PostData } from '../../Data/PostData'

import "./Posts.css"
import Post from '../Post/Post'
const Posts = () => {
    return (
        <div className='Posts'>
    { /* Post*/}
    {PostData.map((post,id)=>{
        return <Post data={post} id={id}/>
    })}
        </div>
    )
}

export default Posts 