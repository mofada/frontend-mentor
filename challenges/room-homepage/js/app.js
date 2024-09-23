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

const App = {
    /**
     * current hero index
     */
    current: 0,
    /**
     * interval id
     */
    interval: null,


    init() {
        this.initHero();

        this.initMobileMenu();
    },
    destroy() {
        this.interval && clearInterval(this.interval);
    },

    initHero() {
        // hero
        const heroDesktop = document.querySelector(".hero__desktop");
        const heroMobile = document.querySelector(".hero__mobile");
        const heroImg = document.querySelector(".hero__img");

        // introduce
        const heroTitle = document.querySelector(".introduce__title");
        const heroDescription = document.querySelector(".introduce__description");

        // next button
        const prevButton = document.querySelector(".actions__item--prev");
        const nextButton = document.querySelector(".actions__item--next");

        // update hero
        const updateHero = () => {
            const hero = HERO_LIST[this.current];
            heroDesktop.srcset = hero.desktop;
            heroMobile.srcset = hero.mobile;
            heroImg.src = hero.mobile;
            heroTitle.innerHTML = hero.title;
            heroDescription.innerHTML = hero.description;
        };
        updateHero();

        // next button
        nextButton.onclick = () => {
            this.current = (this.current + 1) % HERO_LIST.length;
            updateHero();
        };

        // prev button
        prevButton.onclick = () => {
            this.current = (this.current - 1 + HERO_LIST.length) % HERO_LIST.length;
            updateHero();
        };

        // auto play
        this.interval = setInterval(() => {
            this.current = (this.current + 1) % HERO_LIST.length;
            updateHero();
        }, 5000);
    },

    initMobileMenu() {
        const buttonOpen = document.querySelector('.button-open');
        const buttonClose = document.querySelector('.button-close');

        const mobileMenu = document.querySelector('.mobile-menu');

        buttonOpen.onclick = () => {
            mobileMenu.classList.toggle('hidden', false);
        }

        buttonClose.onclick = () => {
            mobileMenu.classList.toggle('hidden', true);
        }
    }
};

window.addEventListener("load", () => {
    App.init();
    console.log("App is running...");
});

window.addEventListener("beforeunload", () => {
    App.destroy();
});
