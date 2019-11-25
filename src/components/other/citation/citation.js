import React from "react"

import { Wrapper, Border, Quote, Text } from "./citation.style"

import json from "./citation.json"

class Citation extends React.Component {
    constructor(props) {
        super(props)
        this.length = json.citations.length

        this.state = {
            citation: json.citations[0],
        }
    }

    render() {
        return (
            <Wrapper>
                <Border>
                    <Quote>”</Quote>
                    <Text>{this.state.citation}</Text>
                    <Text>Moi-même</Text>
                </Border>
            </Wrapper>
        )
    }
}

export default Citation
