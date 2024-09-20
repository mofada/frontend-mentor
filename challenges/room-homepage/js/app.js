/**
 * hero section
 */
const HERO_LIST = [
	{
		title: "Discover innovative ways to decorate",
		description:
			"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
		mobile: "images/mobile-image-hero-1.jpg",
		desktop: "images/desktop-image-hero-1.jpg",
	},
	{
		title: "We are available all across the globe",
		description:
			"With stores all over the world, it's easy for you to find furniture for" +
			" your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
		mobile: "images/mobile-image-hero-2.jpg",
		desktop: "images/desktop-image-hero-2.jpg",
	},
	{
		title: "Manufactured with the best materials",
		description:
			"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
		mobile: "images/mobile-image-hero-3.jpg",
		desktop: "images/desktop-image-hero-3.jpg",
	},
];

const App = {};

window.addEventListener("load", () => {
	App.init();
	console.log("App is running...");
});
