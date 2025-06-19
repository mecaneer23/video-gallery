const TITLE_PREFIX = "Auto Racing";

function setCustomTitlePrefix(titlePrefix) {
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = `${titlePrefix} - ${titleElement.textContent}`;
    }
}

function setCustomizations() {
    setCustomTitlePrefix(TITLE_PREFIX);
}

setCustomizations();