import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlayerSeat from './PlayerSeat';

/*
  Контейнер для сиденья, позволяющий задавать размер сидения в процентах,
  подгоняя высоту под ширину.
  Размер задается шириной, высота достигается засчет отступа в :before,
  т.к. margin считается в процентах от ширины.
  Само сиденье убирается из потока (absolute), и занимает 100% контейнера.

  Внимание: ширина берется из ThemeProvider - theme/sizing/seat/width
*/


const AdaptiveWrapper = styled.div`
  width: ${props => props.theme.sizing.seat.width};
  height: auto;

  &:before {
    content: "";
    display: block;
    margin-top: 100%;
  }
`;

const AdaptiveContainer = styled(PlayerSeat)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`;

const AdaptiveSeat = props =>(
    <AdaptiveWrapper size={props.size}>
        <AdaptiveContainer {...props} />
    </AdaptiveWrapper>
);

AdaptiveSeat.propTypes = {
    size: PropTypes.number.isRequired,
};

export default AdaptiveSeat;    
