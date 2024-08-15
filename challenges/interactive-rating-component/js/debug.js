function toggleVisible() {
    const container = document.querySelector('main');
    container.classList.toggle('hidden');
}

/**
 * dynamic create picture
 */
function addPictureElement() {
    const picture = document.createElement("picture");

    const sourceDesktop = document.createElement("source");
    sourceDesktop.media = "(min-width: 768px)";
    // sourceDesktop.srcset = "design/desktop-design.jpg";
    sourceDesktop.srcset = "design/desktop-thank-you-state.jpg";

    const sourceMobile = document.createElement("source");
    sourceMobile.media = "(max-width: 768px)";
    sourceMobile.srcset = "design/mobile-design.jpg";
    // sourceMobile.srcset = "design/mobile-thank-you-state.jpg";

    const img = document.createElement("img");
    img.src = "design/mobile-design.jpg";
    img.alt = "background";
    img.className = "w-full z-0 absolute top-0 object-cover";

    picture.appendChild(sourceDesktop);
    picture.appendChild(sourceMobile);
    picture.appendChild(img);

    document.body.appendChild(picture);
}

/**
 * create toggle button
 */
function addToggleButton() {
    const container = document.querySelector('main');
    // add class to main
    container && container.classList.add('opacity-65');
    container && container.classList.add('z-10');

    const button = document.createElement("button");
    button.className = "fixed top-4 right-4 z-20 p-1 rounded-full shadow-md" +
        " text-base bg-[hsl(0_0%_100%/0.6)]";
    button.innerHTML = "Toggle";
    button.onclick = () => {
        container && container.classList.toggle('hidden');
    };

    document.body.appendChild(button);
}

window.addEventListener('load', () => {
    // only run in localhost
    if (!location.hostname.includes('localhost')) {
        return;
    }

    addPictureElement();
    addToggleButton();

    console.log('Debugging...');
})
