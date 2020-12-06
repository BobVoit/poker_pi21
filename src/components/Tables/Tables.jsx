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
        if (this.props.isFetching) return <Preloader />;
        return (
            <>
            <div className="tables-container">
                <div className="tables-container_but">
                    <button onClick={this.createTable}>Создать стол</button>
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
                            Фишки
                        </div>

                        <div className="tables-container_header_password tables-container_header_items">
                            Тип стола
                        </div>

                    </div>
                    <div className="tables-container_main">
                        {this.props.tables.map(table => <TableItem key={table.id} table={table} /> )}
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