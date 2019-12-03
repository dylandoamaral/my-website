import React from "react"

import {
    Wrapper,
    Card,
    Content,
    Header,
    Title,
    Subtitle,
    Description,
    Footer,
    Themes,
    Theme,
    Date,
    Feature,
} from "./article_card.style"

class ArticleCard extends React.Component {
    render() {
        return (
            <Wrapper even={this.props.even}>
                <Card to={this.props.path}>
                    <Content>
                        <Header>
                            <Title>{this.props.title}</Title>
                            <Subtitle>{this.props.subtitle}</Subtitle>
                        </Header>
                        <Description>{this.props.description}</Description>
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
                    <Feature fixed={this.props.featuredImage} alt="feature image" />

                </Card>
            </Wrapper>
        )
    }
}

export default ArticleCard

/*
                <Feature fixed={this.props.featuredImage} alt="feature image" />

                <Feature>
                <Img fixed={this.props.featuredImage} alt="feature image" />
                </Feature>
*/
