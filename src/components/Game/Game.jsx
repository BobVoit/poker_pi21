import React from 'react';


class Game extends React.Component {

    render() {
        return(
        <div className="poker-table">
            <div className="poker-table-wrapper">
                <div className="poker-table-bet-block">
                    <div className="poker-table-bet-block-right">
                        <div className="poker-table-bet-block-but-call">

                            <button>Колл</button>
                        </div>
                        <div className="poker-table-bet-block-but-fold">

                            <button>Фолд</button>
                        </div>
                    </div>
                    <div className="poker-table-bet-block-left">
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
        )
    }
}


export default Game;