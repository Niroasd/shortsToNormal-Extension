const init = function changeURL(){
    const injectElement = document.createElement('button');
    injectElement.className = 'newtab-button';
    injectElement.innerHTML = 'Click to open the shorts in new tab';
    document.body.appendChild(injectElement);
}
init();

