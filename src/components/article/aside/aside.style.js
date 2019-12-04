import styled from "styled-components"

import resolutions from "../../../configurations/resolutions.json"

export const Wrapper = styled.aside`
    max-width: 330px;
    position: absolute;
    right: 170px;


    ${resolutions.medias.desktop}{
        max-width: 270px;
        right: 130px;
    }

    ${resolutions.medias.tablet_landscape}{
        position: relative;
        max-width: 600px;
        right: 0;
        left: 0;
        padding: 0;
        margin: 20px auto;
    }
`
