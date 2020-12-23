import React from 'react';

import CreateTableForm from './CreateTableForm';


class CreateTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRenderAnotherElements: false,
        }
    }

    onSubmit = (formData) => {
        const { name, countPlayers, rates, password } = formData;
        this.props.createTable(this.props.token, name, countPlayers, rates, password);
    }

    render() {
        return (
           <CreateTableForm onSubmit={this.onSubmit} />
        )
    }

}

export default CreateTable;