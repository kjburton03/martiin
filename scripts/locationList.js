import { database } from './aquariumData.js';

export const generateLocationHTML = () => {
    let locationHTML = '';

    for (const location of database.location) {
        locationHTML += `
        <article class="location">
        <h2> ${location.name} </h2>
        <div class="locationBody">
            <p> ${location.country} </p>
            <p> ${location.description} </p>
        </div>
        </article>
        `;
    }
    return locationHTML;
};