import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/global/layout/layout"
import CV from "../assets/documents/cv.pdf"

import { Wrapper, Picture, Catchphrase } from "../styles/about.style"

export default ({ data }) => (
    <Layout page="about">
        <Helmet title="À propos de moi | Dylan Do Amaral" defer={false} />
        <Wrapper>
            <Picture fixed={data.owl.childImageSharp.fixed} alt="owl" />
            <Catchphrase>Coucou c'est moi,</Catchphrase>
            <p>
                Je suis un étudiant en Big Data qui va très bientôt terminer son
                cursus, je suis actuellement à Taïwan pour mon dernier semestre
                et je m'ennuie un peu. Alors j'ai décidé de faire ce site sans
                prétention aucune, afin de faire passer le temps et de partager
                ce que j'aime faire. De base, je voulais faire une version de
                mon CV sur cette page mais en y réfléchissant, pour l'instant
                cela n'a aucun intérêt puisque{" "}
                <OutboundLink href={CV} download>
                    mon CV
                </OutboundLink>{" "}
                est là pour ça ainsi que{" "}
                <OutboundLink href="https://www.linkedin.com/in/dylan-do-amaral-431219112/">
                    ma page LinkedIn
                </OutboundLink>
                .
            </p>
            <p>
                Alors ceci n'est en réalité qu'un blog pour l'instant, mais
                j'aime l'idée d'avoir un petit site de base ( mon premier malgré
                des dizaines de projets farfelus et d'ailleurs ça se trouve, il
                n'existera jamais puisque l'heure où j'écris ces lignes, je suis
                que sous Adobe XD entrain de faire la maquette du site). En
                réalité, plus qu'un blog, c'est mon journal intime dans le sens
                où je compte vraiment faire des articles qui m'importent
                vraiment sans aucun but précis, sans langue de bois et sans
                aucune objectivité.
            </p>
            <p>
                Mes paroles sont vraiment à prendre à la légère, je me considère
                comme un bricoleur digital (et oui le mot digital n'a pas de
                sens mais on s'en fiche) et comme tout bon bricoleur,
                j'expérimente, je m'amuse et de ce fait je fais des erreurs. Je
                me considère comme un débutant complet, en gros si on considère{" "}
                <OutboundLink href="https://fr.wikipedia.org/wiki/Effet_Dunning-Kruger">
                    l'Effet Dunning-Kruger
                </OutboundLink>
                , je me trouve dans la vallée et c'est lorsqu'on adore apprendre
                alors je grimpe !
            </p>
        </Wrapper>
    </Layout>
)

export const pictureQuery = graphql`
    query {
        owl: file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
                fixed(width: 140, height: 140) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
