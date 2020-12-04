import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import TableItem from './TableItem';
import { createTable, connectToTable, getTallTables, setisFetching } from '../../redux/tablesReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/Preloader/Preloader';



class Tables extends React.Component {

    componentDidMount() {
        this.props.getTallTables();
    }

    createTable = () => {
        this.props.createTable(this.props.token, "Тест", 3, 1000, 1232423);
    }

    connectToTable = () => {
        this.props.connectToTable(this.props.token, 1);
    }
    

    render() {
        console.log(this.props);
        return (
            <>
            { this.props.isFetching ? <Preloader /> : null }
            <div className="tables-container">
               <button onClick={this.createTable} className="create_tables_but">Создать стол</button>
                <div className="tables-container_window">
                    <div className="tables-container_header">
                        <div className="tables-container_header_id">
                            <h3>№Стола</h3>
                        </div>
                        <div className="tables-container_header_name">
                            <h3>Название стола</h3>
                        </div>
                        <div className="tables-container_header_players">
                            <h3>Игроков</h3>
                        </div>
                        
                        <div className="tables-container_header_bets">
                            <h3>Фишки</h3>
                        </div>
                        <div className="tables-container_header_password">
                            <h3>Тип стола</h3>
                        </div>
                    </div>
                    <div className="tables-container_main">
                        {this.props.tables.map(table => <TableItem table={table} /> )}
                    </div>    

                </div>
            
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    tables: state.tables.tables,
    isFetching: state.tables.isFetching
})

export default compose(connect(mapStateToProps, {
    createTable,
    connectToTable,
    getTallTables
}), withAuthRedirect) (Tables);