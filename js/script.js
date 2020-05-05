let loader;

loadNow = (opacity) => {
    if (opacity <= 0) {
        displayContent();
    }
    else {
        loader.style.opacity = opacity;
        window.setTimeout(() => {
            loadNow(opacity - 0.05)
        }, 100)
    }
}

displayContent = () => {
    loader.style.display = 'none';
    document.querySelector('#content').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    loader = document.querySelector('#loader');
    loadNow(1);
})
