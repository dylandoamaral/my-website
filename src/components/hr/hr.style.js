import styled from "styled-components"

import colors from "../../configurations/colors.json"

export const Wrapper = styled.div`
    width: 300px;
    margin: 10px auto;

    display: flex;
    align-items: center;
`

export const Line = styled.hr`
    width: calc(50% - 20px);
    border: none;
    height: 1px;
    background-color: ${colors.dark};
`

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-top: 10px solid ${colors.primary};

`


