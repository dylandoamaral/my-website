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

import colors from "../../../configurations/colors.json";

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
                    <Logo cover bg={colors.secondary} duration={0.8} to="/">
                        DD
                    </Logo>
                    <Navigation>
                        <Navlink
                            cover
                            bg={colors.secondary}
                            duration={0.8}
                            on={this.props.page === "index" ? "true" : "false"}
                            to="/"
                        >
                            HOME
                        </Navlink>
                        <Navlink
                            cover
                            bg={colors.secondary}
                            duration={0.8}
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
                        cover
                        bg={colors.secondary}
                        duration={0.8}
                        on={this.props.page === "index" ? "true" : "false"}
                        to="/"
                    >
                        HOME
                    </BurgerNavlink>
                    <BurgerSeparation />
                    <BurgerNavlink
                        cover
                        bg={colors.secondary}
                        duration={0.8}
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
