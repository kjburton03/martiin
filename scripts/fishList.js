import { database } from './aquariumData.js';

export const generatefishHTML = () => {
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
        <article class="fish">
            <img class="movie"src="${fish.image}" alt="${fish.name}">
            <h2>${fish.name}</h2>
            <div class="fishBody">
                <p><strong>Species:</strong> ${fish.species}</p>
                <p><strong>Length:</strong> ${fish.length} inches</p>
                <p><strong>Location:</strong> ${fish.location}</p>
                <p><strong>Diet:</strong> ${fish.diet}</p>
            </div>
        </article>
        `;
    }
   return fishHTML;
    // Generate an HTML representation of each fish
};