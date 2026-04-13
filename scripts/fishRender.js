export const renderFishToDOM = (fishyHTML) => {
    const fishList = document.getElementById('fishList')

    if (fishList) {
        fishList.innerHTML = fishyHTML;
    } else { 
        console.error('Could not find element with id "fishList"');
    }
};