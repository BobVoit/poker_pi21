import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fitter from '../Another/Fitter';



const CardsPlaceholder = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 5px dashed hsla(0, 100%, 100%, 0.5);
  border-radius: 10px;
`;


const TableCard = styled.img`
  width: 20%;
  margin: 1% 1% 1% 0;
  width: 20%;
  &:nth-child(1) {
    margin: 1%;
  }
`;

const TableCards = (props) => {
    // const cardsTemplate = props.cards.map(card =>
    //   <TableCard className="sharedCard" src={card.img} />,
    // );
    return (
      <Fitter flexcenter>
        <CardsPlaceholder>
          {/* {cardsTemplate} */}
          <TableCard className="sharedCard" src={props.cards.img} />
        </CardsPlaceholder>
      </Fitter>
    );
}


export default TableCards;