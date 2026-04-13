import { database } from './aquariumData.js';

export const generateTipHTML = () => {
    let tipHTML = '';

    for (const tip of database.tip) {
        tipHTML += `
        <article class="tip">
            <h2> ${tip.topic}</h2>
            <p> ${tip.text}</p>
        </article>
        `;
}
return tipHTML;
};