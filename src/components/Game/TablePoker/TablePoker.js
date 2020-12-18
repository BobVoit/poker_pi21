import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import TableCards from './TableCards/TableCards';
import TablePot from './TablePot/TablePot';
import SeatsLayout from './SeatsLayout/SeatsLayout';
import ActionsGroup from './ActionGroup/ActionGroup';
import allocatePlayers from './allocatePlayers';
import { connect } from 'react-redux';

let players = [{
    you: true,
    seat: 1,
    nickname: 'shook',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'active', // fold, all-in, active, call, check, raise, bet
    cards: [
      {
        suit: 'c',
        rank: 'K',
      },
      {
        suit: 'd',
        rank: '8',
      },
    ],
  },
  {
    you: false,
    seat: 2,
    nickname: 'vovan',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'fold', // fold, all-in, active, call, check, raise, bet
  },
  {
    you: false,
    seat: 3,
    nickname: 'sergey',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'raise', // fold, all-in, active, call, check, raise, bet
  },
  {
    you: false,
    seat: 3,
    nickname: 'sergey',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'raise', // fold, all-in, active, call, check, raise, bet
  },
  {
    you: false,
    seat: 3,
    nickname: 'sergey',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'raise', // fold, all-in, active, call, check, raise, bet
  },
  {
    you: false,
    seat: 3,
    nickname: 'sergey',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'raise', // fold, all-in, active, call, check, raise, bet
  },
  {
    you: false,
    seat: 3,
    nickname: 'ilya',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'raise', // fold, all-in, active, call, check, raise, bet
  },
];

const pot = 1000;
const seatsCount = 7;
const theme = {
    sizeTable: {
        width: '55vw',
        height: '25vw',
    },
    seat: {
        width: '13%'
    },
}

const TablePokerWrapper = styled.div`
    width: ${props => props.theme.sizeTable.width};
    height: ${props => props.theme.sizeTable.height};
    background: #388e3c;
    position: absolute;
    top: 30%;
    left: 23%;
    border: 3px solid #455a64;
    border-radius: 999px;
    box-shadow: 0px 0px 100px 0px rgba(0, 0, 0, 0.75);
    font-size: 1vw;
    &,
    & * {
        box-sizing: border-box;
    }
`;


const MountedActionsGroup = styled(ActionsGroup)`
  position: absolute;
  right: 0;
  bottom: -50%;
`;


class TablePoker extends React.Component {
    render() {
        console.log(this.props);
        return (
            <ThemeProvider theme={theme}>
                <TablePokerWrapper>
                    <TableCards />
                    <TablePot size={this.props.pot} />
                    <SeatsLayout count={this.props.seatsCount} >
                        {allocatePlayers(this.props.players)}
                    </SeatsLayout>
                    <MountedActionsGroup />
                </TablePokerWrapper>
            </ThemeProvider>
        )
    }
}


const mapStateToProps = state => ({
    seatsCount: seatsCount,
    // availableActions: state.table.actions_available,
    // restrictions: state.table.restrictions,
    // tableCards: state.table.table_cards,
    pot: pot,
    players: players
});
  
export default connect(mapStateToProps)(TablePoker);
  