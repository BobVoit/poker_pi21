import React from 'react';



const TableItem = (props) => {

    const onClick = () => {
        props.onClick(props.token, props.table.id);
        props.openGame();
    }

    return (
        <div onClick={onClick} className="tables-container_create">
            <div className="tables-container_create_id tables-container_create_item">
                {props.table.id}
            </div>
            <div className="tables-container_create_name tables-container_create_item">
                {props.table.name}
            </div>
            <div className="tables-container_create_players tables-container_create_item">
                {props.table.quantity_players}
            </div>
            <div className="tables-container_create_bets tables-container_create_item">
                {props.table.rates}
            </div>
            <div className="tables-container_create_password tables-container_create_item">
                Закрытый
            </div>
        </div>
    )
}

export default TableItem;