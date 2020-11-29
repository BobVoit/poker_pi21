import React from 'react';
import nullAvatar from '../../images/nullAvatar.jpg';



const Profile = () => {

    
    return (
        <div className="profile-container">
            <div className="profile-container_window">
                <div className="profile-container_avatar">
                    <div className="profile-container_img">
                        <img src={nullAvatar} alt="avatar"/>
                    </div>
                </div>
                <div className="profile-container_info">

                </div>
            </div>
        </div>
    )
}

export default Profile;

