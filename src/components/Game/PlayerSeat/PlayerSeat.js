import React from 'react';
import styled from 'styled-components';
import userAvatar from '../../../images/nullAvatar.jpg';



const PlayerSeatWrapper = styled.div`
  width: 7vw;
  height: 7vw;

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

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardOfPlayer = styled.img`
  width: 10%;
  height: 20%;
`;

const PlayerSeat = (props) => {
  let playersCards;
  if (!props.isCards) {
    playersCards = null;
  } else if (props.isCards && props.you) {
    playersCards = props.cards.map(card => <CardOfPlayer src={card.img} />)
  } else {
    playersCards = props.cards;
  }


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
      <Cards>
        {playersCards}
      </Cards>
    </PlayerSeatWrapper>
  );
}

// PlayerSeat.propTypes = PlayerSeatPropTypes;

export default PlayerSeat;
