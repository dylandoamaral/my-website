import React from "react";

import {
    Wrapper,
    InnerClick,
    OuterClick,
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
} from "./article_card.style";

import colors from "../../../configurations/colors.json";

class ArticleCard extends React.Component {
    render() {
        const minutes = Math.round(this.props.minutes)
        const readingTime = `${minutes} minute${minutes > 1 ? "s" : ""} de lecture.`

        return (
            <Wrapper even={this.props.even}>
                {this.props.source === "dylandoamaral" ? (
                    //This is an article that come from inside
                    <InnerClick
                        cover
                        bg={colors.secondary}
                        duration={0.8}
                        to={this.props.path}
                    >
                        <Content>
                            <Header>
                                <Title>{this.props.title}</Title>
                                <Subtitle>{this.props.subtitle}</Subtitle>
                            </Header>
                            <Description>{this.props.description}</Description>
                            <Footer>
                                <Date>{this.props.date} - {readingTime}</Date>
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
                    </InnerClick>
                ) : (
                    //This is an article that come from outside
                    <OuterClick href={this.props.path}>
                        <Content>
                            <Header>
                                <Title>{this.props.title}</Title>
                                <Subtitle>{this.props.subtitle}</Subtitle>
                            </Header>
                            <Description>{this.props.description}</Description>
                            <Footer>
                                <Date>{this.props.date} - 10 minutes de lecture.</Date>
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
                    </OuterClick>
                )}
            </Wrapper>
        );
    }
}

export default ArticleCard;

/*
                <Feature fixed={this.props.featuredImage} alt="feature image" />

                <Feature>
                <Img fixed={this.props.featuredImage} alt="feature image" />
                </Feature>
*/
