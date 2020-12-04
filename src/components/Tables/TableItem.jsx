import React from 'react';



const TableItem = (props) => {
    console.log(props);
    return (
        <div className="tables-container_create">
            <div className="tables-container_create_id">
                {props.table.id}
            </div>
            <div className="tables-container_create_name">
                {props.table.name}
            </div>
            <div className="tables-container_create_players">
                {props.table.quantity_players}
            </div>
            <div className="tables-container_create_bets">
                {props.table.rates}
            </div>
            <div className="tables-container_create_password">
                Закрытый
            </div>
        </div>
    )
}

export default TableItem;