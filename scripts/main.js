import { generatefishHTML } from './fishList.js'
// import { tipList } from './tipList.js'
import { generateLocationHTML } from './locationList.js'
import { renderFishToDOM } from './fishrender.js'
import { renderLocationToDom } from './locationRender.js';
import { renderTipToDOM } from './tipRender.js';
import { generateTipHTML } from './tipList.js';

// Generate the fish list
const fishHTML = generatefishHTML()
renderFishToDOM(fishHTML);

// // Generate the care tips
const tipHTML = generateTipHTML()
renderTipToDOM(tipHTML);

// // Generate the location list
const locationHTML = generateLocationHTML()
renderLocationToDom(locationHTML)

// Render each HTML string to the correct DOM element