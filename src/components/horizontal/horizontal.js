import React from "react"

import { Wrapper } from "./horizontal.style"

export default class Horizontal extends React.Component {
    render() {
        const children = React.Children.toArray(this.props.children).filter(
            c => c.props
        ).length
        return (
            <Wrapper width={`${100 / children}%`}>
                {this.props.children}
            </Wrapper>
        )
    }
}
