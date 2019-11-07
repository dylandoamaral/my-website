import React from "react"

import { Wrapper } from "./horizontal.style"

export default class Horizontal extends React.Component {
    render() {
        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        )
    }
}