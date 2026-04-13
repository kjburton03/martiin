export const renderTipToDOM = (tippyHTML) => {
    const tipList = document.getElementById('tipList')

    if (tipList) {
        tipList.innerHTML = tippyHTML;
    } else {
        console.error('could not find element with id "tipList');
    }
};