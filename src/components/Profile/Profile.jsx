import React from 'react';
import nullAvatar from '../../images/nullAvatar.jpg';
import greencoin from '../../images/green-coin.png';
import blackcoin from '../../images/black-dollar.png';
import redcross from '../../images/red-cross.png';
import greenmark from '../../images/green-mark.png';
import calendar from '../../images/calendar.png';




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
                    <div className="profile-container_stats_win">
                    <img src={greencoin} alt="money"/>
                        
                            <div>Общее количество выигранных денег:</div>
                    </div>
                    <div className="profile-container_stats_loss"> 
                        <img src={blackcoin} alt="blackcoin"/>
                            <div>Общее количество проигранных денег:</div> 
                    </div>
                    
                    <div className="profile-container_stats_biggest_win">
                        <img src={greenmark} alt="greenmark"/>
                            <div>Наибольший выигрыш:</div>
                    </div>

                    <div className="profile-container_stats_biggest_loss">
                        <img src={redcross} alt="redcross"/>
                            <div>Наибольший проигрыш:</div>
                    </div>
                    <div className="profile-container_stats_date_registration">
                        <img src={calendar} alt="calendar"/>
                            <div>Дата регистрации:</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
