import React from 'react';



class Tables extends React.Component {




    render() {
        
        return (

            <div className="tables-container">
               
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
                        <div className="tables-container_create">
                            <div className="tables-container_create_id">
                                    1
                            </div>
                            <div className="tables-container_create_name">
                                Гении покера
                            </div>
                            <div className="tables-container_create_players">
                                0/6
                            </div>
                            <div className="tables-container_create_bets">
                                5000
                            </div>
                            <div className="tables-container_create_password">
                                Закрытый
                            </div>
                        </div>
                        
                    </div>    

                </div>
            
            </div>
        )
    }
}


export default Tables;