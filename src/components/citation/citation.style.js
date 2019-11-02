import styled from 'styled-components';

import resolutions from '../../configurations/resolutions.json';

export const Text = styled.span`
    text-align: center;
    padding: 0 160px;
    opacity: 1;
    position: relative;
    min-height: 243.2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;

    @media (max-width: ${resolutions.large}) {
        padding: 0 80px;
        font-size: 45px;
    }

    @media (max-width:${resolutions.medium}) {
        padding: 0 50px;
        font-size: 30px;
    }

    @media (max-width:${resolutions.little}) {
        padding: 0 20px;
    }
`;