import React from "react"
import posed from "react-pose"

import { Text } from "./citation.style"
import json from "./citation.json"

import resolutions from "../../configurations/resolutions.json"

const animationDuration = 1000
const animationInterval = 8000

const AnimateText = posed(Text)({
    right: {
        opacity: 0,
        x: 100,
        ease: "easeOut",
        transition: { duration: animationDuration },
    },
    rightsmall: {
        opacity: 0,
        x: 0,
        ease: "easeOut",
        transition: { duration: animationDuration },
    },
    center: {
        opacity: 1,
        x: 0,
        ease: "easeOut",
        transition: { duration: animationDuration },
    },
    left: {
        opacity: 0,
        x: -100,
        transition: { duration: 0 },
    },
    leftsmall: {
        opacity: 0,
        x: 0,
        transition: { duration: 0 },
    },
})

class Citation extends React.Component {
    constructor(props) {
        super(props)
        this.length = json.citations.length

        this.state = {
            citation: json.citations[Math.floor(Math.random() * this.length)],
            animation: "center",
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.animate(), animationInterval)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        clearTimeout(this.timeout1)
        clearTimeout(this.timeout2)
    }

    randomise = () => {
        let next = json.citations[Math.floor(Math.random() * this.length)]
        while (next === this.state.citation) {
            next = json.citations[Math.floor(Math.random() * this.length)]
        }
        return next
    }

    animate = () => {
        let rightAnimation =
            window.innerWidth > parseInt(resolutions.medium)
                ? "right"
                : "rightsmall"
        let leftAnimation =
            window.innerWidth > parseInt(resolutions.medium)
                ? "left"
                : "leftsmall"

        // Right
        this.setState({
            animation: rightAnimation,
        })

        // Left
        this.timeout1 = setTimeout(() => {
            this.setState({
                citation: this.randomise(),
                animation: leftAnimation,
            })
        }, animationDuration)

        // Normal
        this.timeout2 = setTimeout(() => {
            this.setState({
                animation: "center",
            })
        }, animationDuration + 100)
    }

    render() {
        return (
            <AnimateText pose={this.state.animation}>
                {this.state.citation}
            </AnimateText>
        )
    }
}

export default Citation
