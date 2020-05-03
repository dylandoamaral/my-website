import React from "react";
import { Helmet } from "react-helmet";

export default props => (
    <Helmet title="Dylan Do Amaral" defer={false}>
        {props.schemas.map(schema => (
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}

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
