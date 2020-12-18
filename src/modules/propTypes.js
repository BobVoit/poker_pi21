import PropTypes from 'prop-types';

export const CardPropTypes = {
    suit: PropTypes.string,
    rank: PropTypes.string,
};


export const PlayerSeatPropTypes = {
    you: PropTypes.bool.isRequired,
    nickname: PropTypes.string.isRequired,
    chips: PropTypes.number,
    status: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
};

