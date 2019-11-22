import React from "react"

import { Wrapper, Text } from "./caption.style"

export default class Caption extends React.Component {
    render() {
        return (
            <Wrapper>
                <Text>{this.props.children}</Text>
            </Wrapper>
        )
    }
}
