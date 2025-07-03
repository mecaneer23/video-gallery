function buildGallery(videos) {
    const gallery = document.getElementById('video-gallery');
    for (let [name, id] of Object.entries(videos)) {
        const li = document.createElement('li');
        li.classList.add('video-item');

        const thumbnail = document.createElement('img');
        thumbnail.src = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
        thumbnail.classList.add('thumbnail');

        const title = document.createElement('p');
        title.classList.add('video-title');
        title.textContent = name;

        const a = document.createElement('a');
        a.href = `https://www.youtube.com/watch?v=${id}`;

        a.appendChild(thumbnail);
        a.appendChild(title);

        li.appendChild(a);

        gallery.appendChild(li);
    }
}

buildGallery({
    "Session 1": "mbkfff-S2zU",
    "Session 2": "nMZrSdiTNWA",
    "Session 3": "6hsDIV0GnkA",
    "Session 4": "3Zt_6KRTVnA",
    "Practice 1": "QHYgmLixB8w",
    "Practice 2": "cKGwXQK9vCA",
    "Qualifying 2": "dI-OYXi_F2Y",
    "Sprint Race": "mMDEL-l7G40",
});