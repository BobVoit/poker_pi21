import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import TableItem from './TableItem';
import { createTable, connectToTable, getАllTables, getTableById} from '../../redux/tablesReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import CreateTable from './CreateTable'




class Tables extends React.Component {
    state = {
        isCreateTable: false,
        isOpenGame: false
    }

    componentDidMount() {
        this.props.getАllTables();
    }

    createTable = () => {
        this.props.createTable(this.props.token, "Тест", 3, 1000, 1232423);
    }

    openCreateTablePage = () => {
        this.setState({ isCreateTable: !this.state.isCreateTable })
    }
    
    openGame = () => {
        this.setState({
            isOpenGame: true
        })
    }

    render() {  
        if (this.props.isFetching) return <Preloader />;
        if (this.state.isOpenGame) return <Redirect to="/game" />
        return (
            <div className="tables-wrapper">
                { this.state.isCreateTable && 
                    <CreateTable 
                        createTable={this.props.createTable} 
                        token={this.props.token}
                    />}
                <div className="tables-container">
                    <div className="tables-container_but">
                        <Button onClick={this.openCreateTablePage} variant="contained">Создать стол</Button>
                    </div>
                    <div className="tables-container_window">
                        <div className="tables-container_header">

                            <div className="tables-container_header_id tables-container_header_items">
                                №Стола
                            </div>

                            <div className="tables-container_header_name tables-container_header_items">
                                Название стола
                            </div>

                            <div className="tables-container_header_players tables-container_header_items">
                                Игроков
                            </div>
                            
                            <div className="tables-container_header_bets tables-container_header_items">
                                Ставка
                            </div>

                            <div className="tables-container_header_password tables-container_header_items">
                                Тип стола
                            </div>

                        </div>
                        <div className="tables-container_main">
                            {this.props.tables.map(table => 
                            <TableItem 
                                openGame={this.openGame}
                                getTableById={this.props.getTableById}
                                key={table.id}
                                token={this.props.token}
                                onClick={this.props.connectToTable} 
                                table={table} 
                            /> )}
                        </div>    

                    </div>
                </div>
            </div>
        )
    }
}

Tables.propTypes = {
    token: PropTypes.string,
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    tables: state.tables.tables,
    isFetching: state.tables.isFetching
})

export default compose(connect(mapStateToProps, {
    createTable,
    connectToTable,
    getАllTables,
    getTableById
}), withAuthRedirect) (Tables);