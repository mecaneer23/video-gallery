const TITLE_PREFIX = "Auto Racing";

function setCustomTitlePrefix(titlePrefix) {
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = `${titlePrefix} - ${titleElement.textContent}`;
    }
}

async function fetchRemoteHTML(url) {
    return await fetch(url)
        .catch(error => {
            console.error('Error fetching remote HTML:', error);
        })
        .then(response => {
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.stack}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        });
}

async function setHeaderFooter() {
    const style = document.createElement("link");
    style.href = "https://raw.githubusercontent.com/mecaneer23/mecaneer23.github.io/refs/heads/main/resources/nav.html";
    // style.re
    document.querySelector('header').innerHTML = await fetchRemoteHTML("https://raw.githubusercontent.com/mecaneer23/mecaneer23.github.io/refs/heads/main/resources/nav.html");
    document.querySelector('footer').innerHTML = await fetchRemoteHTML("https://raw.githubusercontent.com/mecaneer23/mecaneer23.github.io/refs/heads/main/resources/footer.html");
}

async function setCustomizations() {
    setCustomTitlePrefix(TITLE_PREFIX);
    // await setHeaderFooter();
}

setCustomizations();