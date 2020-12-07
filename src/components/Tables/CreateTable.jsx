import React from 'react';
import { Field, reduxForm } from 'redux-form';



class CreateTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRenderAnotherElements: false,
        }
    }


    printInfo = (e) => {
        console.log(e.target.checked);
    }

    render() {
        return (
            <div className="create-table">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="create-table__inputs">
                        <div className="create-table__name create-table__item">
                            <label htmlFor="createTableName create-table__item">Название стола</label>
                            <Field id="createTableName"
                            name="createTable" component={"input"} />
                        </div>
                        <div className="create-table__rates create-table__item">
                            <label htmlFor="createTableRates">Ставка</label>
                            <Field id="createTableRates"
                            type="number" name="createRates" component={"input"} />
                        </div>
                        <div className="create-table__count-players create-table__item">
                            <label htmlFor="createCountPlayers">Количество игроков</label>
                            <Field id="createCountPlayers"
                            type="number" name="createCount" component={"input"} />
                        </div>
                        <div className="create-table__password create-table__item">
                            <label htmlFor="createTablePassword">Пароль</label>
                            <Field id="createTablePassword"
                            placeholder="" type="text" name="createTablePassword" component={"input"} />
                        </div>
                        <div className="create-table__btn create-table__item">
                            <button>Создать стол</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default reduxForm({
    form: 'createTable'
})(CreateTable);