import React from 'react';
import PropTypes from 'prop-types';

import createLayout from './creator';
import layoutX7 from './layoutX7';

const SeatsLayout = (props) => {
    const Layout = createLayout(layoutX7); 
    console.log(props);
    return (
      <Layout>
        {props.children}
      </Layout>
    );
};
  
// SeatsLayout.propTypes = {
//     count: PropTypes.number.isRequired,
//     children: PropTypes.string.isRequired,
// };

export default SeatsLayout;