import styled from "styled-components"

import resolutions from "../../configurations/resolutions.json"

export const Wrapper = styled.aside`
    max-width: 360px;
    position: absolute;
    right: 0;
    font-size: 16px;

    padding-left: 30px;
    padding-right: 60px;

    ${resolutions.medias.desktop}{
        max-width: 300px;
        padding-right: 20px;
    }

    ${resolutions.medias.tablet_landscape}{
        position: relative;
        max-width: 400px;
        right: 0;
        left: 0;
        padding: 0;
        margin: 20px auto;
    }
`
