

import React, { useRef, useState } from 'react'
import "./PostShare.css"
import ProfileImage from "../../img/profileImg.jpg"
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from "@iconscout/react-unicons"
//import { UilTimes} from "@iconscout/react-unicons"
import { useSelector, useDispatch } from "react-redux"
import { uploadImage, uploadPost } from '../../Actions/uploadAction'
const PostShare = () => {

    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null)

    const imageRef = useRef()
    const { user } = useSelector((state) => state.authReducer.authData)
    const dispatch = useDispatch()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

    const desc = useRef()
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img)
        }
    }
    const reset = () => {

        setImage(null)
        desc.current.value = ""
    }
    const handleUpload = async (e) => {
     
        e.preventDefault();
    
        //post data
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
    
        // if there is an image with post
        if (image) {
          const data = new FormData();
          const fileName = Date.now() + image.name;
          data.append("name", fileName);
          data.append("file", image);
          newPost.image = fileName;
          console.log(newPost);
          try {
            dispatch(uploadImage(data));
          } catch (err) {
            console.log(err);
          }
        }
        dispatch(uploadPost(newPost));
        reset()
    }
    return (
        <div className='PostShare'>
    { /* <img src={user.ProfileImage} alt="" /> */}
            <img src={user.coverPicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
            <div>
                <input type={"text"} placeholder="What's happening" ref={desc} required />
                <div className='postOptions'>
                    <div className='option'
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()} >
                        <UilScenery />
                        Photo
                    </div>
                    <div className='option'
                        style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Vedio
                    </div>{" "}
                    <div className='option'
                        style={{ color: "var(--location)" }} >
                        <UilLocationPoint />
                        Location
                    </div>{" "}
                    <div className='option'
                        style={{ color: "var(--shedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className='button ps-button'
                        onClick={handleUpload }
                        disabled={loading}>

                        {loading ? "Uploading..." : "Share"}

                    </button>
                    <div style={{ display: "none" }}>
                        <input type={"file"} name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className='previewImage'>
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} />
                    </div>
                )}
            </div>
        </div>
    )
}


export default PostShare;






