import React from 'react';
import PropTypes from 'prop-types';

import createLayout from './creater';



const SeatsLayout = props => {
    const Layout = createLayout(genX6);

    return (
        <Layout>
            {props.children}
        </Layout>
    );
}

SeatsLayout.propTypes = {
    count: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired
}

export default SeatsLayout;