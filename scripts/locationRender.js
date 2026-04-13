export const renderLocationToDom = (locationzHTML) => {
    const locationsList = document.getElementById('locationList')

    if (locationsList) {
        locationsList.innerHTML = locationzHTML;
    } else {
        console.error('could not find epenislement with id "locationslist" ')
    }
};
