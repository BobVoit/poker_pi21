import React from 'react';

import greencoin from '../../../images/green-coin.png';
import blackcoin from '../../../images/black-dollar.png';
import redcross from '../../../images/red-cross.png';
import greenmark from '../../../images/green-mark.png';
import calendar from '../../../images/calendar.png';

import StatsItem from './StatsItem';

const ProfileStats = (props) => {

    return (
      <div className="profile-container_stats">
        <div className="profile-container_stats_header">Статистика</div>     
        <StatsItem img={greenmark} alt={"greenmark"} text={"Победы:"} value={props.win} />
        <StatsItem img={redcross} alt={"redcross"} text={"Проигрыши:"} value={props.loss} />
        <StatsItem img={greencoin} alt={"money"} text={"Общее количество выигранных денег:"} value={props.biggest_win} />
        <StatsItem img={blackcoin} alt={"blackcoin"} text={"Общее количество проигранных денег:"} value={props.biggest_loss} />
        <StatsItem img={calendar} alt={"calendar"} text={"Дата регистрации:"} value={props.date_registration} />
      </div>
    );
}

export default ProfileStats;