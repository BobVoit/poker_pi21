import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import CardBackSide from '../../images/cards/Back.png';

// import Table from './Table/Table';
import TablePoker from './TablePoker/TablePoker';

class Game extends React.Component {

    render() {
        return (
            <div className="game-wrapper">
                <TablePoker />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({});

export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect
)(Game);