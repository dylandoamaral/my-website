import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

import { Wrapper, Picture, Catchphrase } from "../styles/about.style"

export default ({ data }) => (
        <Layout>
          <Wrapper>
            <Picture fixed={data.owl.childImageSharp.fixed} alt="owl"/>
            <Catchphrase>Coucou c'est moi,</Catchphrase>
            <p>Je suis un étudiant den Big Data qui va très bientôt terminé son cursus, je suis actuellement à Taïwan pour mon dernier semestre et je m'ennuie un peu. Alors j'ai décidé de faire ce site sans prétention aucune, afin de faire passer le temps et de partager ce que j'aime faire. De base, je voulais faire une version de mon CV sur cette page mais en y réfléchissant, pour l'instant cela n'a aucun intérêt puisque <a href="./assets/documents/CV_Octobre_2019_FR.pdf" download>mon CV</a> est là pour ça ainsi que <a href="https://www.linkedin.com/in/dylan-do-amaral-431219112/">ma page LinkedIn</a>.</p>
            <p>Alors ceci n'est en réalité qu'un blog pour l'instant, mais j'aime l'idée d'avoir un petit site de base ( mon premier malgré des dizaines de projets farfelus et d'ailleurs ça se trouve, il n'existera jamais puisque l'heure où j'écris ces lignes, je suis que sous Adobe XD entrain de faire la maquette du site). En réalité, plus qu'un blog, c'est mon journal intime dans le sens où je compte vraiment faire des articles qui m'importent vraiment sans aucun but précis, sans langue de bois et sans aucune objectivité.</p>
            <p>Mes paroles sont vraiment à prendre à la légère, je me considère comme un bricoleur digital (et oui le mot digital n'a pas de sens mais on s'en fiche) et comme tout bon bricoleur, j'expérimente, je m'amuse et de ce fait je fais des erreurs. Je me considère comme un débutant complet, en gros si on considère <a href="https://fr.wikipedia.org/wiki/Effet_Dunning-Kruger">l'Effet Dunning-Kruger</a>, je me trouve dans, je me trouve dans la vallée et c'est super cool d'être dans cette vallée lorsqu'on adore apprendre alors je m'amuse comme un petit fou !</p>
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
  }`
