import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import nullAvatar from '../../images/nullAvatar.jpg';
import greencoin from '../../images/green-coin.png';
import blackcoin from '../../images/black-dollar.png';
import redcross from '../../images/red-cross.png';
import greenmark from '../../images/green-mark.png';
import calendar from '../../images/calendar.png';
import coin from '../../images/money.png';


const Profile = (props) => {
    
    
    return (
        <div className="profile-container">
        <div className="profile-container_window">
            
            <div className="profile-container_avatar">
                <div className="profile-container_nickname">
                    {props.nickname}
                </div>
                <div className="profile-container_img">
                    <img src={nullAvatar} alt="avatar"/>
                </div>
                <div className="profile-container__money">
                    <div className="profile-container__coin-img">
                        <img src={coin} alt="coin"/>
                    </div>
                    <div className="profile-container__money-value">
                        {props.money}
                    </div>
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

Profile.propTypes = {
    nickname: PropTypes.string,
    money: PropTypes.number,
    isAuth: PropTypes.bool
}


const mapStateToProps = (state) => ({
    nickname: state.auth.nickname, 
    money: state.auth.money,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Profile);

