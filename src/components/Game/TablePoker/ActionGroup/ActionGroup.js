import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionButton from './ActionButton';
import BetResizer from './BetResizer/BetResizer';

const InlineBetResizer = styled(BetResizer)`
  display: inline;
  width: 20vw;
`;

const ActionsGroup = props =>
  (<div className={props.className}>
    {/* {props.available.fold && <ActionButton> Fold </ActionButton>}
    {props.available.check && <ActionButton> Check </ActionButton>}
    {props.available.call && <ActionButton> Call </ActionButton>}
    {props.available.raise &&
    <span>
      <ActionButton> Raise </ActionButton>
      <InlineBetResizer {...props.restrictions} />
    </span>} */}
    <ActionButton> Fold </ActionButton>
    <ActionButton> Check </ActionButton>
    <ActionButton> Call </ActionButton>
    <span>
      <ActionButton> Raise </ActionButton>
      <InlineBetResizer {...props.restrictions} />
    </span>
  </div>);

ActionsGroup.propTypes = {
  className: PropTypes.string,
  available: PropTypes.objectOf(PropTypes.bool).isRequired,
  restrictions: PropTypes.objectOf(PropTypes.number).isRequired,
};

ActionsGroup.defaultProps = {
  className: '',
};

export default ActionsGroup;
