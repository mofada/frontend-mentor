const App = {
    /**
     * @type {HTMLButtonElement}
     */
    menuButton: null,
    /**
     * @type {HTMLButtonElement}
     */
    menuCloseButton: null,
    /**
     * @type {HTMLElement}
     */
    menuAside: null,

    init() {
        this.menuButton = document.querySelector('.menu-button')
        this.menuCloseButton = document.querySelector('.menu-close-button')
        this.menuAside = document.querySelector('.menu-aside')

        // check if elements exist
        console.assert(this.menuButton !== null, 'MenuButton element not found')
        console.assert(this.menuCloseButton !== null, 'MenuCloseButton element not found')
        console.assert(this.menuAside !== null, 'MenuAside element not found')

        // add event listener
        this.menuButton.addEventListener('click', () => {
            this.menuAside.classList.toggle('hidden', false)
            document.body.classList.toggle('overflow-y-hidden', true)
        })
        this.menuCloseButton.addEventListener('click', () => {
            this.menuAside.classList.toggle('hidden', true)
            document.body.classList.toggle('overflow-y-hidden', false)
        })
    },

}

window.addEventListener('load', () => {
    App.init()
    console.log('App is running...')
})
