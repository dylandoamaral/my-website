import React from "react"

import { Wrapper, Emoji, Text } from "./advice.style"

export default class Advice extends React.Component {
    render() {
        return (
            <Wrapper>
                <Emoji><span role="img" aria-label="bulb" >💡</span></Emoji>
                <Text>{this.props.children}</Text>
            </Wrapper>
        )
    }
}