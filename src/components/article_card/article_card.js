import React from "react"

import {
    Click,
    Wrapper,
    Content,
    Title,
    Footer,
    Themes,
    Theme,
    Date,
    Feature,
} from "./article_card.style"

class ArticleCard extends React.Component {
    render() {
        return (
            <Click first={this.props.first} to={this.props.path}>
                <Wrapper first={this.props.first}>
                    <Content>
                        <Title>{this.props.title}</Title>
                        <Footer>
                            <Date>{this.props.date}</Date>
                            <Themes>
                                {this.props.themesImage.map(theme => (
                                    <Theme
                                        fixed={theme.value}
                                        key={theme.uniqueId}
                                    />
                                ))}
                            </Themes>
                        </Footer>
                    </Content>
                    <Feature
                        fixed={this.props.featuredImage}
                        alt="feature image"
                    />
                </Wrapper>
            </Click>
        )
    }
}

export default ArticleCard
