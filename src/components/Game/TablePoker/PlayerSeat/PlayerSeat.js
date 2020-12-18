import React from 'react';
import styled from 'styled-components';
// import PlayerSeatPropTypes from '../../../models/player-seat';

import userAvatar from '../../../../images/nullAvatar.jpg';

const PlayerSeatWrapper = styled.div`
  width: 15vw;
  height: 15vw;

  display: flex;
  flex-direction: column;

  background: #263238;
  border: 2px solid #263238;
  border-radius: 50%;
  overflow: hidden;
`;

const PlayerAvatar = styled.div`
  height: 50%;

  background-color: whitesmoke;
  background: #eceff1 url(${userAvatar}) no-repeat center top;
`;

const PlayerPanel = styled.div`
  height: 50%;

  background: #263238;
  color: #fafafa;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

function PlayerSeat(props) {
  console.log(props);
  return (
    <PlayerSeatWrapper className={props.className}>
      <PlayerAvatar />
      <PlayerPanel>
        <span>
          {props.nickname}
        </span>
        <span>
          {props.chips}
        </span>
      </PlayerPanel>
    </PlayerSeatWrapper>
  );
}

// PlayerSeat.propTypes = PlayerSeatPropTypes;

export default PlayerSeat;
