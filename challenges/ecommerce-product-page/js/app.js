const App = {
    /**
     * count
     */
    currentPicture: 1,

    /**
     * init thumbnail
     */
    initThumbnail() {
        const thumbnailContainer = document.querySelector('.thumbnail-container');
        const mainImage = document.querySelector('.main-image');

        thumbnailContainer.querySelectorAll('input[type="radio"]')
            .forEach((thumbnail) => {
                thumbnail.addEventListener('click', (event) => {
                    mainImage.src = thumbnail.value;
                })
            })
    },
    /**
     * init shop cart
     */
    initShopCart() {
        const shopCart = document.querySelector('.shop-cart')
        const shopCartContainer = document.querySelector('.shop-cart-container')

        // show shop cart container
        shopCart.addEventListener('click', (event) => {
            const target = event.currentTarget.parentElement;

            // set position
            const x = target.offsetLeft + target.offsetWidth / 2 + 5 + 180;
            // 28 is offset
            const y = target.offsetTop + target.offsetHeight + 24;
            const windowWidth = window.innerWidth;

            const right = Math.max(windowWidth - x, 8);

            shopCartContainer.style.right = `${right}px`;
            shopCartContainer.style.top = `${y}px`;

            // toggle shop cart
            shopCartContainer.classList.toggle('hidden')
            shopCartContainer.classList.toggle('flex')
        })
    },
    /**
     * init quantity
     */
    initQuantity() {
        const quantity = document.querySelector('#quantity')
        const minus = document.querySelector('#minus')
        const plus = document.querySelector('#plus')
        const addToCart = document.querySelector('#add-to-cart')

        minus.addEventListener('click', () => {
            const value = parseInt(quantity.value) || 0
            if (value > 1) {
                quantity.value = value - 1
            }
        })

        plus.addEventListener('click', () => {
            const value = parseInt(quantity.value) || 0
            quantity.value = value + 1
        })

        addToCart.addEventListener('click', () => {
            this.updateShopCart()
        })
    },
    /**
     * update shop cart
     */
    updateShopCart() {
        const quantity = document.querySelector('#quantity')
        const count = quantity.value

        const shopCount = document.querySelector('#shop-count')
        shopCount.textContent = count
        shopCount.classList.toggle('hidden', count <= 0)

        const shopCartList = document.querySelector('#card-list')
        if (count > 0) {
            shopCartList.innerHTML = `<section
		class="self-stretch h-[50px] grid grid-cols-[auto,1fr,auto] grid-rows-[auto,auto] gap-x-4">
	<img src="images/image-product-1-thumbnail.jpg" alt=""
	     class="w-[50px] h-[50px] row-span-2 rounded"/>

	<h3 class="row-span-1 text-blue">
		Fall Limited Edition Sneakers
	</h3>

	<button class="row-span-2 self-center" onclick="App.removeShop()">
		<img src="images/icon-delete.svg" alt="delete icon"/>
	</button>

	<p class="text-[16px] text-blue">$125.00 x ${count}
		<span class="text-blue-900 font-bold ml-[5px] text-[17px]">${(125 * count).toFixed(2)}</span>
	</p>
</section>

<button class="bg-orange text-blue-900 rounded-lg px-4 py-2 h-[52px] self-stretch font-bold">
	Checkout
</button>
`
        } else {
            shopCartList.innerHTML = '<span class="font-bold m-auto">Your cart is empty.</span>'
        }
    },
    removeShop() {
        const quantity = document.querySelector('#quantity')
        quantity.value = ''

        this.updateShopCart()
    },
    initPicture() {
        const banner = document.querySelector('#banner')

        const previousButton = document.querySelector('#previous')
        const nextButton = document.querySelector('#next')

        previousButton.addEventListener('click', () => {
            this.currentPicture -= 1
            updatePicture(this.currentPicture)
        })

        nextButton.addEventListener('click', () => {
            this.currentPicture += 1
            updatePicture(this.currentPicture)
        })

        function updatePicture(index) {
            previousButton.disabled = index <= 1
            nextButton.disabled = index >= 4
            banner.src = `images/image-product-${index}.jpg`
        }
    },
}

window.addEventListener('load', () => {
    App.initThumbnail()
    App.initShopCart()
    App.initQuantity()
    App.initPicture()
    console.log('App is running...')
})
