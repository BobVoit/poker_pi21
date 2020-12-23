import React from 'react';

import nullAvatar from '../../images/nullAvatar.jpg';
import coin from '../../images/money.png';


const ProfileAbout = (props) => {
  return (
    <div className="profile-container_avatar">
      <div className="profile-container_nickname">{props.nickname}</div>
      <div className="profile-container_img">
        <img src={nullAvatar} alt="avatar" />
      </div>
      <div className="profile-container__money">
        <div className="profile-container__coin-img">
          <img src={coin} alt="coin" />
        </div>
        <div className="profile-container__money-value">{props.money}</div>
      </div>
    </div>
  );
}

export default ProfileAbout;