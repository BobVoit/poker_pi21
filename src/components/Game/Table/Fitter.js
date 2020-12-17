import styled from 'styled-components';

export default styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${props => 
        props.flexcenter && 
        `
        display: flex;
        justify-content: center;
        align-items: center;
    `};
`;