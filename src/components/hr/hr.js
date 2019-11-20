import React from "react"

import { Wrapper, Line, Triangle } from "./hr.style"

export default class Hr extends React.Component {
    render() {
        return (
            <Wrapper>
                <Line />
                <Triangle />
                <Line />    
            </Wrapper>
        )
    }
}
