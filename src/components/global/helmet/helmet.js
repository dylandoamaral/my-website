import React from "react";
import { Helmet } from "react-helmet";

export default (props) => (
    <Helmet title="Dylan Do Amaral" defer={false}>
        {props.children}
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
            content="https://www.dylandoamaral.me/index/taiwan.jpg"
        />
        <meta
            name="url"
            property="og:url"
            content="https://www.dylandoamaral.me/"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dylan Do Amaral" />
        <meta
            name="twitter:description"
            content="Bonjour je m'appelle Dylan Do Amaral et bienvenue sur mon site personnel dans lequel on va parler programmation orientée data et autres"
        />
        <meta
            name="twitter:image"
            content="http://www.dylandoamaral.me/index/taiwan.jpg"
        />
        
        <meta http-equiv="content-language" content="fr-fr" />
        <html lang="fr" />

        <script type="application/ld+json">
                {{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    url: "https://www.dylandoamaral.me/",
                    givenName: "Dylan",
                    familyName: "Do Amaral",
                    image: "https://www.dylandoamaral.me/index/taiwan",
                    jobTitle: "Data Engineer",
                    gender: "https://schema.org/Male",
                    hasOccupation: {
                        "@type": "Occupation",
                        "educationRequirements": "bac +5",
                        "experienceRequirements": "data engineer degree",
                        "occupationLocation": "paris",
                    },
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+336-51-07-66-14",
                        contactType: "Numéro personnel",
                    },
                }}
            </script>
    </Helmet>
);
