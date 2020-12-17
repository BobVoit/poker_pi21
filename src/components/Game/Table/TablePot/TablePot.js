import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fitter from '../Fitter';

const PotSize = styled.div`
  position: absolute;
  bottom: 25%;
  width: 100%;
  font-size: 150%;
  font-weight: 800;
  color: white;
  text-align: center;
`;

const TablePot = props =>
  (<Fitter>
    <PotSize>
      {props.size}
    </PotSize>
  </Fitter>);

TablePot.propTypes = {
  size: PropTypes.number.isRequired,
};

export default TablePot;
