import React from "react"

import { Canvas } from "./game.style"

import colors from "../../../configurations/colors.json"

const WIDTH = 1600
const HEIGHT = 800
const BUTTON_WIDTH = WIDTH / 4
const BUTTON_HEIGHT = 100

class Enemy {
    constructor(w) {
        this.w = w
        this.restart()
        this.speed = 8
        this.fail = false
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI)
    }

    update() {
        if (this.fail) return
        this.y += this.speed
        if (this.y > HEIGHT + this.w / 2) this.fail = true
    }

    restart() {
        this.x = this.w + Math.random() * (WIDTH - this.w * 2)
        this.y = 0 - this.w
        this.speed *= 1.03
    }

    isClicked(xMouse, yMouse) {
        if (
            xMouse > this.x - this.w &&
            xMouse < this.x + this.w &&
            yMouse > this.y - this.w &&
            yMouse < this.y + this.w
        ) {
            return true
        }
        return false
    }
}

export default class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            status: "menu",
            score: 0,
            maxScore: 0,
            ennemies: [],
        }

        this.cRef = React.createRef()
    }

    componentDidMount() {
        this.canvas = this.cRef.current
        this.ctx = this.canvas.getContext("2d")

        this.drawMenu()

        this.canvas.addEventListener(
            "click",
            event => {
                const rect = this.canvas.getBoundingClientRect()
                const ratio = WIDTH / this.canvas.scrollWidth
                const x = (event.clientX - rect.left) * ratio
                const y = (event.clientY - rect.top) * ratio

                if (this.state.status === "menu") {
                    if (
                        x > WIDTH / 2 - BUTTON_WIDTH / 2 &&
                        x < WIDTH / 2 + BUTTON_WIDTH / 2 &&
                        y > HEIGHT / 2 - BUTTON_HEIGHT / 2 &&
                        y < HEIGHT / 2 + BUTTON_HEIGHT / 2
                    ) {
                        this.start()
                    }
                } else {
                    this.state.ennemies.forEach(ennemy => {
                        if (ennemy.isClicked(x, y)) {
                            ennemy.restart()
                            this.setState({
                                score: this.state.score + 1,
                            })
                        }
                    })
                }
            },
            false
        )
    }

    componentWillUnmount() {
        clearInterval(this.countdown)
    }

    start = () => {
        this.setState({
            status: "game",
            ennemies: [new Enemy(60)],
        })

        this.countdown = setInterval(() => this.update(), 1000 / 60)
    }

    end = () => {
        let max =
            this.state.score > this.state.maxScore
                ? this.state.score
                : this.state.maxScore

        this.setState({
            status: "menu",
            ennemies: [],
            score: 0,
            maxScore: max,
        })

        clearInterval(this.countdown)

        this.ctx.clearRect(0, 0, WIDTH, HEIGHT)
        this.drawMenu()
    }

    update = () => {
        this.ctx.clearRect(0, 0, WIDTH, HEIGHT)
        this.updateGame()
        this.drawGame()
        this.state.ennemies.forEach(ennemy => {
            if (ennemy.fail === true) {
                this.end()
            }
        })
    }

    drawMenu = () => {
        this.ctx.fillStyle = colors.primary
        this.ctx.fillRect(
            WIDTH / 2 - BUTTON_WIDTH / 2,
            HEIGHT / 2 - BUTTON_HEIGHT / 2,
            BUTTON_WIDTH,
            BUTTON_HEIGHT
        )

        this.ctx.fillStyle = colors.dark
        this.ctx.font = "60px sans-serif"
        this.ctx.textAlign = "center"
        this.ctx.fillText("Start", WIDTH / 2, HEIGHT / 2 + 16)

        this.ctx.fillStyle = colors.dark
        this.ctx.font = "40px sans-serif"
        this.ctx.textAlign = "center"
        this.ctx.fillText(
            "Max score : " + this.state.maxScore,
            WIDTH / 2,
            (1 * HEIGHT) / 2 + 100
        )
    }

    drawGame = () => {
        this.ctx.fillStyle = colors.primary
        this.ctx.fill()

        this.state.ennemies.forEach(ennemy => {
            ennemy.draw(this.ctx)
        })

        this.ctx.fillStyle = colors.dark
        this.ctx.font = "60px sans-serif"
        this.ctx.textAlign = "center"
        this.ctx.fillText(this.state.score, WIDTH / 2, 100)
    }

    updateGame = () => {
        this.state.ennemies.forEach(ennemy => {
            ennemy.update()
        })
    }

    render() {
        return <Canvas ref={this.cRef} width={WIDTH} height={HEIGHT}></Canvas>
    }
}
