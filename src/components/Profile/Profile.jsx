import React from 'react';
import nullAvatar from '../../images/nullAvatar.jpg';
import greencoin from '../../images/green-coin.png';




const Profile = () => {

    
    return (
        <div className="profile-container">
            <div className="profile-container_window">
                
                <div className="profile-container_avatar">
                <div className="profile-container_nickname">
                    Nickname
                    </div>
                    <div className="profile-container_img">
                        <img src={nullAvatar} alt="avatar"/>
                    </div>

                </div>
                <div className="profile-container_stats">
                <div className="profile-container_stats_header">
                    Статистика
                    </div>
                    <div>Количество побед:</div>
                    <div>Количество поражений:</div>
                    <div className="profile-container_stats_money">
                    <img src={greencoin} alt="money"/>
                    <div>Общее количество выигранных денег:</div>
                    </div>
                    <div className="profile-container_stats_money_lose">
                    
                    <div>Общее количество проигранных денег:</div>
                    </div>
                    <div>Дата регистрации:</div>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile;

