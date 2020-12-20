import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import ProfileAbout from './ProfileAbout';
import ProfileStats from './ProfileStats/ProfileStats';



const Profile = (props) => {
    
    
    return (
      <div className="profile-container">
        <div className="profile-container_window">
          <ProfileAbout nickname={props.nickname} money={props.money} />
          <ProfileStats 
            win={props.win} 
            loss={props.loss}
            biggest_loss={props.biggest_loss}
            biggest_win={props.biggest_win}
            date_registration={props.date_registration}
          />
        </div>
      </div>
    );
}

Profile.propTypes = {
    nickname: PropTypes.string.isRequired,
    money: PropTypes.number.isRequired,
    isAuth: PropTypes.bool.isRequired,
    win: PropTypes.number.isRequired,
    lost: PropTypes.number.isRequired,
    biggest_win: PropTypes.number.isRequired,
    biggest_lost: PropTypes.number.isRequired,
    date_registration: PropTypes.string.isRequired,
}


const mapStateToProps = (state) => ({
    nickname: state.auth.nickname, 
    money: state.auth.money,
    isAuth: state.auth.isAuth,
    win: state.auth.win,
    loss: state.auth.loss,
    biggest_win: state.auth.biggest_win,
    biggest_loss: state.auth.biggest_loss,
    date_registration: state.auth.date_registration
})

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Profile);

