import resolutions from "./resolutions.json"

const outer_margin_large = 170;
const outer_margin_desktop = 150;
const outer_margin_landscape = 80;
const outer_margin_portrait = 20;
const outer_margin = [outer_margin_large, outer_margin_desktop, outer_margin_landscape, outer_margin_portrait]

const inner_margin_large = 170;
const inner_margin_desktop = 150;
const inner_margin_landscape = 0;
const inner_margin_portrait = 0;
const inner_margin = [inner_margin_large, inner_margin_desktop, inner_margin_landscape, inner_margin_portrait]

const full_margin_large = outer_margin_large + inner_margin_large;
const full_margin_desktop = outer_margin_desktop + inner_margin_desktop;
const full_margin_landscape = outer_margin_landscape + inner_margin_landscape;
const full_margin_portrait = outer_margin_portrait + inner_margin_portrait;
const full_margin = [full_margin_large, full_margin_desktop, full_margin_landscape, full_margin_portrait]

const margin = (margins) => {
    return `
    margin-left: ${margins[0]}px;
    margin-right: ${margins[0]}px;

    ${resolutions.medias.desktop} {
        margin-left: ${margins[1]}px;
        margin-right: ${margins[1]}px;
    }

    ${resolutions.medias.tablet_landscape} {
        margin-left: ${margins[2]}px;
        margin-right: ${margins[2]}px;
    }

    ${resolutions.medias.tablet_portrait} {
        margin-left: ${margins[3]}px;
        margin-right: ${margins[3]}px;
    }`;
}

export default {
    outer_margin:`${margin(outer_margin)}`,
    inner_margin:`${margin(inner_margin)}`,
    full_margin:`${margin(full_margin)}`,

    anti_outer_margin:`${margin(outer_margin.map(x => -1 * x))}`,
    anti_inner_margin:`${margin(inner_margin.map(x => -1 * x))}`,
    anti_full_margin:`${margin(full_margin.map(x => -1 * x))}`,
}
