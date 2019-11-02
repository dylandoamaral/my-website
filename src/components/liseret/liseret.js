import React from "react"

import { Canvas } from "./liseret.style"

import resolutions from '../../configurations/resolutions.json';

class Liseret extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVertical: false,
            lWidth: 0,
            lHeight: 0,
        };
        this.lRef = React.createRef();
        this.size = 30;

        this.resize = this.resize.bind(this);

        let body = document.body, html = document.documentElement;
        console.log(`
            ${window.innerHeight},\n${body.offsetHeight},\n${html.clientHeight},\n${html.scrollHeight},\n ${html.offsetHeight},\n\n
        `)
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize() {
        const full_width = document.documentElement.clientWidth;
        const full_height = document.documentElement.scrollHeight;

        if(window.innerWidth < parseInt(resolutions.medium)){
            const canvas = this.lRef.current;
            canvas.width = full_width;
            canvas.height = this.size;

            this.setState({
                isVertical: false,
                lWidth: full_width,
                lHeight: this.size,
            }, () => {
                this.draw();
            });
        }else {
            const canvas = this.lRef.current;
            canvas.width = this.size;
            canvas.height = full_height;

            this.setState({
                isVertical: true,
                lWidth: this.size,
                lHeight: full_height,
            }, () => {
                this.draw();
            });
        }
    }

    draw() {
        const canvas = this.lRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (this.state.isVertical) {
            ctx.translate(0, -this.size / 2);
            for (let i = 0; i < canvas.height / this.size + 1; i++) {
                if (i % 2 === 0) {
                    ctx.beginPath();
                    ctx.moveTo(0, i * this.size);
                    ctx.lineTo(this.size, (i * this.size + (i + 1) * this.size) / 2);
                    ctx.lineTo(0, (i + 1) * this.size);
                    ctx.closePath();
                    ctx.fillStyle = "#222222";
                } else {
                    ctx.beginPath();
                    ctx.moveTo(this.size, i * this.size);
                    ctx.lineTo(0, (i * this.size + (i + 1) * this.size) / 2);
                    ctx.lineTo(this.size, (i + 1) * this.size);
                    ctx.closePath();
                    ctx.fillStyle = "#C6A57A";
                }
                ctx.fill();
            }
        } else {
            ctx.translate(- this.size / 2, 0);
            for (let i = 0; i < canvas.width / this.size + 1; i++) {
                if (i % 2 === 0) {
                    ctx.beginPath();
                    ctx.moveTo(i * this.size, 0);
                    ctx.lineTo((i * this.size + (i + 1) * this.size) / 2, this.size);
                    ctx.lineTo((i + 1) * this.size, 0);
                    ctx.closePath();
                    ctx.fillStyle = "#222222";
                } else {
                    ctx.beginPath();
                    ctx.moveTo(i * this.size, this.size);
                    ctx.lineTo((i * this.size + (i + 1) * this.size) / 2, 0);
                    ctx.lineTo((i + 1) * this.size, this.size);
                    ctx.closePath();
                    ctx.fillStyle = "#C6A57A";
                }
                ctx.fill();
            }
        }
    }

    render() {
        return (
            <Canvas ref={this.lRef} width={this.state.lWidth} height={this.state.lHeight} />
        );
    }
}

export default Liseret