import React from "react"

import { Wrapper, Emoji, Text } from "./callout.style"

export default class Callout extends React.Component {
    render() {
        let type = types[this.props.type];
        if(!type) type = types["advice"];
        return (
            <Wrapper background={type["background"]} border={type["border"]}>
                <Emoji><span role="img" aria-label="bulb" >{type["emote"]}</span></Emoji>
                <Text>{this.props.children}</Text>
            </Wrapper>
        )
    }
}

const types = {
    "warning": {
        "background": "#fff3cd",
        "border": "#ffeeba",
        "emote": "⚠️"
    },
    "danger": {
        "background": "#f8d7da",
        "border": "#f5c6cb",
        "emote": "❌"
    },
    "advice": {
        "background": "#cce5ff",
        "border": "#b8daff",
        "emote": "💡"
    },
}