import React from "react"

import { Click, Wrapper, Content, Description, Footer, Themes, Theme, Date, Feature } from "./article_card.style"

class ArticleCard extends React.Component {
    render() {
        console.log(this.props.featuredImage)
        return (
            <Click to={this.props.path}>
                <Wrapper>
                    <Content>
                        <h2>{this.props.title}</h2>
                        <Description>{this.props.description}</Description>
                        <Footer>
                            <Themes>
                                <Theme />
                            </Themes>
                            <Date>{this.props.date}</Date>
                        </Footer>
                    </Content>
                    <Feature fixed={this.props.featuredImage} alt="feature image" />
                </Wrapper>
            </Click>
        );
    }
}

export default ArticleCard

/**




 */