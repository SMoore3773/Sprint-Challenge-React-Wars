import React, {useState, useEffect,} from 'react';
import styled from 'styled-components'

const PersonButtons = props => {
    const ButtonBox = styled.div`
    display:flex;
    flex-direction: row;

    `;

    const Button = styled.button `
    

    `;


    return (
        <ButtonBox>
            <Button onClick = {() => props.setPerson(props.person - 1)}>Previous</Button>
            <Button onClick = {() => props.setPerson(props.person + 1)}>Next</Button>
            
        </ButtonBox>
    );
}

export default PersonButtons;