import styled from "styled-components"

import resolutions from "../../configurations/resolutions.json"

export const Layout = styled.div`
    padding: 0;
    margin: 0 170px;

    ${resolutions.medias.desktop} {
        margin: 0 150px;
    }

    ${resolutions.medias.tablet_landscape} {
        margin: 0 80px;
    }

    ${resolutions.medias.tablet_portrait} {
        margin: 0 20px;
    }
`
