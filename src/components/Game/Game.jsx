import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Player from './Player';
import CardBackSide from '../../images/cards/Back.png';

class Game extends React.Component {

    render() {
        return(
        <div className="poker-table">
            <div className="poker-table-wrapper-border">
                <div className="poker-table-wrapper">
                    <div className="poker-table__game-block">
                        <Player nameClass="player1" nickname="player1" />
                        <Player nameClass="player2" nickname="player2" />
                        <Player nameClass="player3" nickname="player3" />
                        <Player nameClass="player4" nickname="player4" />
                        <Player nameClass="player5" nickname="player5" />
                        <Player nameClass="player6" nickname="player6" />
                        <Player nameClass="player7" nickname="player7" /> 
                    </div>
                    <div className="poker-table__table-cards">
                        <img src={CardBackSide} alt="" width="70"/>
                        <img src={CardBackSide} alt="" width="70"/>
                        <img src={CardBackSide} alt="" width="70"/>
                        <img src={CardBackSide} alt="" width="70"/>
                    </div>
                    <div className="poker-table-bet-block-container">
                        <div className="poker-table-bet-block">
                            <div className="poker-table-bet-block-left">
                                <div className="poker-table-bet-block-but-call">
                                    <button>Колл</button>
                                </div>
                                <div className="poker-table-bet-block-but-fold">
                                    <button>Фолд</button>
                                </div>
                            </div>
                            <div className="poker-table-bet-block-right">
                                <div className="poker-table-bet-block-but-range"> 
                                    <input type="range" min="0" max="1000" step="30" value="0" /> 
                                    <input type="text" value="0" /> 
                                </div>
                                
                                <div className="poker-table-bet-block-but-raise">
                                    <button>Рейз</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({});

export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect
)(Game);