import React from "react";

import { Wrapper, Header, Container, Text } from "./proscons.style";

export default class ProsCons extends React.Component {
    render() {
        return (
            <Wrapper>
                <Container type="pros">
                    <Header type="pros">+</Header>
                    {this.props.pros.split("/").map(value => {
                        return <Text type="pros">{value}</Text>;
                    })}
                </Container>
                <Container type="cons">
                    <Header type="cons">+</Header>
                    {this.props.cons.split("/").map(value => {
                        return <Text type="cons">{value}</Text>;
                    })}
                </Container>
            </Wrapper>
        );
    }
}
