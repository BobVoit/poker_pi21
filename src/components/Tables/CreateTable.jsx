import React from 'react';
import { Field, reduxForm } from 'redux-form';



class CreateTable extends React.Component {



    render() {
        return (
            <div className="create-table">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="create-table__inputs">
                        <div className="create-table__name">
                            <label htmlFor="createTableName">Название стола</label>
                            <Field 
                            name={"createTable"} component={"input"} />
                        </div>
                        <div className="create-table__name">
                            <label htmlFor="createTableRates">Ставка</label>
                            <Field
                            type="number" name="createRates" component={"input"} />
                        </div>
                        <div>                           
                            <div>
                                <label htmlFor="createTableRadio1">С паролем</label>
                                <Field id="createTableRadio1"
                                type="radio" name="isPassword" component={"input"} />
                            </div>
                            <div>
                                <label htmlFor="createTableRadio2">Без пароля</label>
                                <Field id="createTableRadio2" checked
                                type="radio" name="isPassword" component={"input"} />
                            </div>
                        </div>
                        <div className="create-table__btn">
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