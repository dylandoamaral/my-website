import React from "react"

import { Header, Logo, Navlink } from "./header.style"

export default (props) => (
    <Header>
        <Logo to="/">DD</Logo>
        <nav>
            <Navlink on={props.page === "index" ? "true" : "false"} to="/">HOME</Navlink>
            <Navlink on={props.page === "articles" ? "true" : "false"}  to="/articles/">MES ARTICLES</Navlink>
            <Navlink on={props.page === "about" ? "true" : "false"} to="/about/">À PROPOS DE MOI</Navlink>
        </nav>
    </Header>
)
