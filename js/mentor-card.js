class MentorCard extends HTMLElement {
    static observedAttributes = ["title", "cover", "live", "solution", "html", "css", "js", "tailwind"];

    constructor() {
        super();
    }

    connectedCallback() {
        // title
        const title = this.getAttribute("title");
        // screenshot
        const cover = this.getAttribute("cover");
        // live url
        const liveUrl = this.getAttribute("live");
        // solution url
        const solutionUrl = this.getAttribute("solution");
        // tags
        const isHtml = this.hasAttribute("html");
        const isCss = this.hasAttribute("css");
        const isJs = this.hasAttribute("js");
        const isTailwind = this.hasAttribute("tailwind");


        this.className = "flex flex-col rounded-lg bg-white p-4 shadow";

        // cover
        const coverFigure = document.createElement("figure");
        coverFigure.onclick = () => window.open(liveUrl, "_blank");
        this.append(coverFigure);

        const coverImg = document.createElement("img");
        coverImg.src = cover;
        coverImg.alt = title;
        coverImg.className = "w-full aspect-video object-cover rounded-lg cursor-pointer";
        coverFigure.append(coverImg);

        // title
        const titleElement = document.createElement("h2");
        titleElement.className =
            "text-lg font-bold mt-2 underline hover:text-blue-500 capitalize cursor-pointer truncate";
        titleElement.innerText = title?.split("-").join(" ");
        titleElement.onclick = () => window.open(solutionUrl, "_blank");
        this.append(titleElement);

        // tags
        let tagsParent = document.createElement("div");
        tagsParent.className = "text-sm flex gap-1";
        this.append(tagsParent);

        // html
        if (isHtml) {
            let htmlTag = this.createTag("span", "bg-html", "HTML");
            tagsParent.append(htmlTag);
        }

        // css
        if (isCss) {
            let cssTag = this.createTag("span", "bg-css", "CSS");
            tagsParent.append(cssTag);
        }

        // js
        if (isJs) {
            let jsTag = this.createTag("span", "bg-js", "JS");
            tagsParent.append(jsTag);
        }

        // tailwind
        if (isTailwind) {
            let tailwindTag = this.createTag("span", "bg-tailwind", "Tailwind CSS");
            tagsParent.append(tailwindTag);
        }
    }

    /**
     * create tag
     * @param tagName
     * @param className
     * @param text
     * @returns {HTMLElement}
     */
    createTag(tagName, className, text) {
        let tag = document.createElement(tagName);
        tag.className = "px-1 text-xs rounded text-white";
        tag.classList.add(className);
        tag.innerText = text;
        return tag;
    }
}

// register web component
customElements.define("mentor-card", MentorCard);
