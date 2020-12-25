import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import TableCards from './TableCards/TableCards';
import TablePot from './TablePot/TablePot';
import SeatsLayout from './SeatsLayout/SeatsLayout';
import ActionsGroup from './ActionGroup/ActionGroup';
import allocatePlayers from './allocatePlayers';

import { getTableById } from '../../redux/tablesReducer';
import { disconnectFromTable } from '../../redux/gameReducer';
import { Redirect } from 'react-router-dom';


let players = [{
    you: true,
    seat: 1,
    nickname: 'shook',
    chips: 360,
    bet: 0,
    dealer: true, // true
    status: 'active', // fold, all-in, active, call, check, raise, bet
    cards: [
      
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

const ButtonBackInTables = styled(Button)`
    position: absolute;
    bottom: 130%;
    right: 120%;
`;



class TablePoker extends React.Component {
  state = {
    inGame: true,
  }


  disconnectGame = () => {
    this.setState({inGame: false});
  }

  disconnectFromTable = () => {
    this.props.disconnectFromTable(
      this.props.token,
      this.props.currentTable.id
    );
    this.disconnectGame();
  };

  equalArraysOfObjact = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].id !== arr2[i].id) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  render() {
    return (
      <div className="game-wrapper">
        { !this.state.inGame ? <Redirect to="/tables" /> : 
        <ThemeProvider theme={theme}>
          <TablePokerWrapper>
            <ButtonBackInTables
              onClick={this.disconnectFromTable}
              variant="contained"
              size="medium"
            >
              Выйти из игры
            </ButtonBackInTables>
            <TableCards cards={this.props.cards} />
            <TablePot size={this.props.pot} />
            <SeatsLayout count={this.props.seatsCount}>
              {allocatePlayers(this.props.players)}
            </SeatsLayout>
            <MountedActionsGroup />
          </TablePokerWrapper>
        </ThemeProvider>
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
    currentTable: state.tables.currentTable,
    cards: state.game.cards[0],
    token: state.auth.token,
    players: players
});
  
export default connect(mapStateToProps, {
  disconnectFromTable,
  getTableById
})(TablePoker);
  