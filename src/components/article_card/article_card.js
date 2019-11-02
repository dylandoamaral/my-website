import React from "react"

import { Wrapper, Description, Footer, Themes, Theme, Date} from "./article_card.style"

class ArticleCard extends React.Component {
    render() {
        return (
            <Wrapper>
                <h2>{this.props.title}</h2>
                <Description>{this.props.description}</Description>
                <Footer>
                    <Themes>
                        <Theme />
                    </Themes>
                    <Date>{this.props.date}</Date>
                </Footer>
            </Wrapper>
        );
    }
}

export default ArticleCard