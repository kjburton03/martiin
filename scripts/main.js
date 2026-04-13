import { generatefishHTML } from './fishList.js'
// import { tipList } from './tipList.js'
import { generateLocationHTML } from './locationList.js'
import { renderFishToDOM } from './fishrender.js'
import { renderLocationToDom } from './locationRender.js';

// Generate the fish list
const fishHTML = generatefishHTML()
renderFishToDOM(fishHTML);

// // Generate the care tips
// const tipHTML = tipList()

// // Generate the location list
const locationHTML = generateLocationHTML()
renderLocationToDom(locationHTML)

// Render each HTML string to the correct DOM element