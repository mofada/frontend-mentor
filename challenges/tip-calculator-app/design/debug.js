function toggleVisible() {
    const container = document.querySelector('main');
    container.classList.toggle('hidden');
}

// 动态创建并添加HTML代码
function createPictureElement() {
    const picture = document.createElement("picture");

    const sourceDesktop = document.createElement("source");
    sourceDesktop.media = "(min-width: 768px)";
    sourceDesktop.srcset = "design/desktop-design.jpg";

    const sourceMobile = document.createElement("source");
    sourceMobile.media = "(max-width: 768px)";
    sourceMobile.srcset = "design/mobile-design.jpg";

    const img = document.createElement("img");
    img.src = "design/mobile-design.jpg";
    img.alt = "background";
    img.className = "w-full z-0 absolute top-0 lg:bottom-0 lg:h-full";

    picture.appendChild(sourceDesktop);
    picture.appendChild(sourceMobile);
    picture.appendChild(img);

    document.body.appendChild(picture);
}

window.onload = () => {
    createPictureElement();

    document.body
}
