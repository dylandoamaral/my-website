import Swup from 'swup';

import draw from './liseret'

const swup = new Swup();

swup.on('contentReplaced', function () {
    swup.options.containers.forEach((selector) => {
        draw();
        console.log(window);
    });
});