import React from "react"
import { Helmet } from "react-helmet"

export default () => (
    <Helmet title="Dylan Do Amaral" defer={false}>
        <meta name="author" content="Dylan Do Amaral" />
        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content="Dylan Do Amaral" />
        <meta
            name="description"
            property="og:description"
            content="Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
        />
        <meta
            name="keywords"
            content="dylan, dylan do amaral, do amaral, engineer, ingénieur, big data, ingénieur data, website, gatsby, date engineer, ingénieur de la donnée"
        />

        <meta
            name="image"
            property="og:image"
            content="https://www.dylandoamaral.me/index/forest.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dylan Do Amaral" />
        <meta
            name="twitter:description"
            content="Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
        />
        <meta
            name="twitter:image"
            content="http://www.dylandoamaral.me/index/forest.jpg"
        />
    </Helmet>
)
