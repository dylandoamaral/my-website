import React from "react"

import { Header, Logo, Navlink } from "./header.style"

export default () => (
    <Header>
        <Logo to="/">DD</Logo>
        <nav>
            <Navlink to="/articles/">Mes articles</Navlink>
            <Navlink to="/about/">À propos de moi</Navlink>
        </nav>
    </Header>
)
