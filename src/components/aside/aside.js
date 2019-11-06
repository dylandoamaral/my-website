import React from "react"

import { Wrapper } from "./aside.style"

export default class Caption extends React.Component {
    render() {
        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        )
    }
}