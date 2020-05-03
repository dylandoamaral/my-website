import React from "react";

import {
    Wrapper,
    Logo,
    Navigation,
    Navlink,
    BurgerNavigation,
    BurgerNavlink,
    BurgerSeparation,
    Bread,
    Slice,
} from "./header.style";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
        };
    }

    toggleMenu = () => {
        this.setState({
            toggled: !this.state.toggled,
        });
    };

    render() {
        return (
            <div>
                <Wrapper>
                    <Logo to="/">DD</Logo>
                    <Navigation>
                        <Navlink
                            on={this.props.page === "index" ? "true" : "false"}
                            to="/"
                        >
                            HOME
                        </Navlink>
                        <Navlink
                            on={
                                this.props.page === "articles"
                                    ? "true"
                                    : "false"
                            }
                            to="/articles/"
                        >
                            MES ARTICLES
                        </Navlink>
                    </Navigation>
                    <Bread onClick={this.toggleMenu}>
                        <Slice />
                        <Slice />
                        <Slice size="small" />
                    </Bread>
                </Wrapper>
                <BurgerNavigation
                    isToggle={this.state.toggled ? "true" : "false"}
                >
                    <BurgerNavlink
                        on={this.props.page === "index" ? "true" : "false"}
                        to="/"
                    >
                        HOME
                    </BurgerNavlink>
                    <BurgerSeparation />
                    <BurgerNavlink
                        on={this.props.page === "articles" ? "true" : "false"}
                        to="/articles/"
                    >
                        MES ARTICLES
                    </BurgerNavlink>
                </BurgerNavigation>
            </div>
        );
    }
}

export default Header;
