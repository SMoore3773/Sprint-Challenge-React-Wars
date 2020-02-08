import React, {useState, useEffect,} from 'react';
import styled from 'styled-components'

const Header = () => {
    const Header = styled.h1`
        color: #443e3e;
        text-shadow: 1px 1px 5px #fff;
    `
    return (
        <div>
            <Header className="Header">React Wars</Header>
        </div>
    );
}

export default Header;