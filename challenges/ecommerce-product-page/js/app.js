const App = {
    /**
     * @type {HTMLButtonElement}
     */
    previousButton: null,
    /**
     * @type {HTMLButtonElement}
     */
    nextButton: null,
    /**
     * @type {HTMLElement}
     */
    shopCart: null,
    /**
     * @type {HTMLElement}
     */
    shopCartContainer: null,

    init() {
        this.previousButton = document.querySelector('#previous')
        this.nextButton = document.querySelector('#next')
        this.shopCart = document.querySelector('.shop-cart')
        this.shopCartContainer = document.querySelector('.shop-cart-container')

        // check if elements exist
        console.assert(this.previousButton !== null, 'previousButton element not found')
        console.assert(this.nextButton !== null, 'nextButton element not found')
        console.assert(this.shopCart !== null, 'shopCart element not found')
        console.assert(this.shopCartContainer !== null, 'shopCartContainer element not found')

        this.shopCart.addEventListener('click', (event) => {
            const target = event.currentTarget.parentElement;

            // set position
            const x = target.offsetLeft + target.offsetWidth / 2 + 5 + 180;
            // 28 is offset
            const y = target.offsetTop + target.offsetHeight + 24;
            const windowWidth = window.innerWidth;

            const right = Math.max(windowWidth - x, 8);

            this.shopCartContainer.style.right = `${right}px`;
            this.shopCartContainer.style.top = `${y}px`;

            // toggle shop cart
            this.shopCartContainer.classList.toggle('hidden')
            this.shopCartContainer.classList.toggle('flex')
        })

        // hide shop cart container
        this.previousButton.addEventListener('click', () => {
            this.shopCartContainer.classList.toggle('hidden')
        })
        this.nextButton.addEventListener('click', () => {
            this.shopCartContainer.classList.toggle('hidden')
        })
    }


}

window.addEventListener('load', () => {
    App.init()
    console.log('App is running...')
})
