import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import CardBackSide from '../../images/cards/Back.png';

import Table from './Table/Table';

class Game extends React.Component {

    render() {
        return (
            <Table />
        )
    }
}

const mapStateToProps = (state) => ({});

export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect
)(Game);