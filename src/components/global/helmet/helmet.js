import React from "react";
import { Helmet } from "react-helmet";

export default props => (
    <Helmet title="Dylan Do Amaral" defer={false}>
        <script type="application/ld+json">
            {JSON.stringify({
                "@content": props.url,
                "@type": "WebPage",
                headline: props.author,
            })}
        </script>

        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                url: "https://www.dylandoamaral.me/",
                givenName: "Dylan",
                familyName: "Do Amaral",
                image: "https://www.dylandoamaral.me/index/taiwan",
                jobTitle: "Data Engineer",
                gender: "https://schema.org/Male",
                hasOccupation: {
                    "@type": "Occupation",
                    educationRequirements: "bac +5",
                    experienceRequirements: "data engineer degree",
                    occupationLocation: "paris",
                },
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+336-51-07-66-14",
                    contactType: "Numéro personnel",
                },
            })}
        </script>

        {props.children}

        <meta name="author" content={props.author} />
        <meta name="keywords" content={props.keywords} />

        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content={props.author} />
        <meta
            name="description"
            property="og:description"
            content={props.description}
        />
        <meta name="image" property="og:image" content={props.image} />
        <meta name="url" property="og:url" content={props.url} />
        <meta name="type" property="og:type" content={props.type} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.author} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image} />

        <meta http-equiv="content-language" content="fr-fr" />
        <html lang="fr" />
    </Helmet>
);
