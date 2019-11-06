import React from "react"

import { Wrapper, Text } from "./aside.style"

export default class Caption extends React.Component {
    render() {
        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        )
    }
}