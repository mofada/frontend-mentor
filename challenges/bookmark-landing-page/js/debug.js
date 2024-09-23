/**
 * dynamic create picture
 */
function addPictureElement() {
	const picture = document.createElement("picture");

	const sourceDesktop = document.createElement("source");
	sourceDesktop.media = "(min-width: 768px)";
	// sourceDesktop.srcset = "design/desktop-design.jpg";
	sourceDesktop.srcset = "design/desktop-design-slide-1.jpg";

	const sourceMobile = document.createElement("source");
	sourceMobile.media = "(max-width: 768px)";
	sourceMobile.srcset = "design/mobile-design.jpg";
	// sourceMobile.srcset = "design/mobile-navigation.jpg";

	const img = document.createElement("img");
	img.src = "design/mobile-design.jpg";
	img.alt = "background";
	img.className =
		"w-full -z-10 absolute top-0 left-0 right-0 object-cover opacity-50";

	picture.appendChild(sourceDesktop);
	picture.appendChild(sourceMobile);
	picture.appendChild(img);

	document.body.appendChild(picture);
}

/**
 * create toggle button
 */
function addToggleButton() {
	const container = document.querySelector("main");
	// add class to main
	container && container.classList.add("opacity-65");
	container && container.classList.add("z-10");

	const button = document.createElement("button");
	button.className =
		"fixed top-4 right-4 z-20 p-1 rounded-full shadow-md" +
		" text-base bg-[hsl(0_0%_100%/0.2)] text-[white]";
	button.innerHTML = "Hide";
	button.onclick = () => {
		container && container.classList.toggle("hidden");

		button.innerHTML = container.classList.contains("hidden")
			? "Show"
			: "Hide";
	};

	document.body.appendChild(button);
}

window.addEventListener("load", () => {
	// only run in localhost
	if (!location.hostname.includes("localhost")) {
		return;
	}

	addPictureElement();
	addToggleButton();

	console.log("Debugging...");
});
