import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import TableItem from './TableItem';
import { createTable, getАllTables, getTableById, setTables } from '../../redux/tablesReducer';
import { connectToTable } from '../../redux/gameReducer'; 
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import CreateTable from './CreateTable';
import { tablesAPI } from '../../api/api';




class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCreateTable: false,
            isOpenGame: false,
            tables:[],
        }
    }

    requestGetAllTables = () => {
        this.props.getАllTables();
        this.setState({tables: this.props.tables});
    }

    componentWillUnmount() {
        clearInterval(this.requstID);
    }

    componentDidMount() {
        this.requestGetAllTables();
        this.requstID= setInterval(
          () => this.requestGetAllTables(),
          5000
        );
    }

    // shouldComponentUpdate(nextProps) {
    //     if (!this.equalArraysOfObjact(this.props.tables, this.state.tables)) {
    //         this.setState({tables: this.props.tables})
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     this.props.getАllTables();
    //     if (!this.equalArraysOfObjact(this.props.tables, this.prevProps.tables)) {

    //     }
    // }

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

    openCreateTablePage = () => {
        this.setState({ isCreateTable: !this.state.isCreateTable })
    }
    
    openGame = () => {
        this.setState({
            isOpenGame: true
        })
    }

    render() {  
        console.log("render")
        return (
            <div className="tables-wrapper">
                { this.props.isFetching ? <Preloader /> : null }
                { this.state.isOpenGame ? <Redirect to="/game" /> : null }
                { this.state.isCreateTable && 
                    <CreateTable 
                        createTable={this.props.createTable} 
                        token={this.props.token}
                        openGame={this.openGame}
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
                                Игроки
                            </div>
                            
                            <div className="tables-container_header_bets tables-container_header_items">
                                Ставка
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