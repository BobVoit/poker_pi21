import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionButton from '../ActionButton/ActionButton';
import BetResizer from '../BetResizer/BetResizer';


const InlineBetResizer = styled(BetResizer)`
    display: inline;
    width: 20vw;
`;


const ActionGroup = props => (
    <div className={props.className}>
        {props.available.fold && <ActionButton> Fold </ActionButton>}
        {props.available.check && <ActionButton> Check </ActionButton>}
        {props.available.call && <ActionButton> Call </ActionButton>}
        {props.available.raise &&
        <span>
        <ActionButton> Raise </ActionButton>
        <InlineBetResizer {...props.restrictions} />
        </span>}
    </div>
)

ActionGroup.propTypes = {
    className: PropTypes.string,
    available: PropTypes.objectOf(PropTypes.bool).isRequired,
    registration: PropTypes.objectOf(PropTypes.number).isRequired 
}

ActionGroup.defaultProps = {
    className: ""
}

export default ActionGroup;




