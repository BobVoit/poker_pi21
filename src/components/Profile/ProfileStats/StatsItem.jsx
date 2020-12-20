import React from 'react';
import styled from 'styled-components';


const StatsItemWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding-left: 0.5vw;
    padding-bottom: 2vh;
    img{
        width:2.5vw;
        padding-right: 1vw; 
    }
    span {
        margin-left: 8px;
    }
`;

const StatsItem = (props) => {
    return (
        <StatsItemWrapper>
            <img src={props.img} alt={props.alt} />
            <div>{props.text}</div>
            <span>{props.value}</span>
        </StatsItemWrapper>
    )
}


export default StatsItem;