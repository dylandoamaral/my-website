import json from '../assets/database/citation.json' ;

const INTERVAL = 10000;
const ANIMATION_DELAY = 1250;

let text = document.getElementById("citation-content");
if (text != null) text.innerHTML = json.citations[Math.floor(Math.random() * json.citations.length)];

window.setInterval(() => {
    let citation = document.getElementById("citation");
    let text = document.getElementById("citation-content");

    if(citation != null){
        citation.classList.add("index-citation-transition");
        citation.classList.add("index-citation-right");
    
        setTimeout(() => {
            citation.classList.remove("index-citation-transition");
            citation.classList.remove("index-citation-right");
            citation.classList.add("index-citation-left");
        }, ANIMATION_DELAY);
    
        setTimeout(() => {
            if (text != null) text.innerHTML = json.citations[Math.floor(Math.random() * json.citations.length)];
            citation.classList.add("index-citation-transition");
            citation.classList.remove("index-citation-left");
        }, ANIMATION_DELAY * 2);
    }
}, INTERVAL);