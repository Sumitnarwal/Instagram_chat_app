
import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { uploadImage } from '../../../Actions/uploadAction';
import { updateUser } from '../../../Actions/userAction';

export const ProfileModel = ({ modelOpend, setModelOpend, data }) => {
    const theme = useMantineTheme();
    const { password, ...other } = data;
    const [formData, setFormData] = useState(other);
    const [profileImage, setProfileImage] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const dispatch = useDispatch()
    const params = useParams()
    const { user } = useSelector((state) => state.authReducer.authData)

    const handlechange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            event.target.name === "profileImage" ? setProfileImage(img) : setCoverImage(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let UserData = formData;
        if (profileImage) {
            const data = new FormData();
            const fileName = Date.now() + profileImage.name;
            data.append("name", fileName);
            data.append("file", profileImage);
            UserData.profilePicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        if (coverImage) {
            const data = new FormData();
            const fileName = Date.now() + coverImage.name;
            data.append("name", fileName);
            data.append("file", coverImage);
            UserData.coverPicture = fileName;
            try {
                dispatch(uploadImage(data));
            } catch (err) {
                console.log(err);
            }
        }
        dispatch(updateUser(params.id, UserData));
        setModelOpend(false);
    };
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modelOpend}
            onClose={() => setModelOpend(false)}
        >
            {/* Modal content */}

            <form className='infoForm'>
                <h3>Your info</h3>
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name='firstname'
                        placeholder='First Name'
                        onChange={handlechange}
                        value={formData.firstname}
                    />
                    <input
                        type="text"
                        className="infoInput"
                        name='lastname'
                        placeholder='Last Name'
                        onChange={handlechange}
                        value={formData.lastname}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name='worksAt'
                        placeholder='Works at'
                        onChange={handlechange}
                        value={formData.worksAt}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name='LivesIn'
                        placeholder='Lives in'
                        onChange={handlechange}
                        value={formData.livesIn}
                    />
                    <input
                        type="text"
                        className="infoInput"
                        name='country'
                        placeholder='Country'
                        onChange={handlechange}
                        value={formData.country}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="relationship"
                        placeholder='RelationShip Status'
                        onChange={handlechange}
                        value={formData.relationship}
                    />
                </div>
                <div>
                    Profile Image
                    <input type="file" name='profileImage' onChange={onImageChange} />
                    Cover Image
                    <input type="file" name='coverImage' onChange={onImageChange} />
                </div>
                <button className='button infoButton' onClick={handleSubmit}>Update</button>
            </form>
        </Modal>
    );
}