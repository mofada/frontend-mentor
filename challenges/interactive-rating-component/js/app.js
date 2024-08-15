const App = {
    /**
     * @type {HTMLFormElement}
     */
    form: null,
    /**
     * @type {HTMLSpanElement}
     */
    ratingScore: null,
    /**
     * @type {HTMLDivElement}
     */
    ratingContainer: null,
    /**
     * @type {HTMLDivElement}
     */
    successContainer: null,

    init() {
        // Initialize DOM elements
        this.form = document.querySelector('.rating-form');
        this.ratingScore = document.querySelector('.rating-score');
        this.ratingContainer = document.querySelector('.rating-container');
        this.successContainer = document.querySelector('.success-container');

        // Check if elements exist
        console.assert(this.form !== null, 'Form element not found');
        console.assert(this.ratingScore !== null, 'RatingScore element not found');
        console.assert(this.ratingContainer !== null, 'RatingContainer element not found');
        console.assert(this.successContainer !== null, 'SuccessContainer element not found');

        // Add event listeners
        if (this.form) this.form.addEventListener('submit', this.handleSubmit.bind(this));
        if (this.successContainer) this.successContainer.addEventListener('click', this.back.bind(this));
    },

    back() {
        // Show the rating form and hide the success message
        if (this.ratingContainer) this.ratingContainer.classList.remove('hidden');
        if (this.successContainer) this.successContainer.classList.add('hidden');
    },

    /**
     * @param {Event} event
     */
    handleSubmit(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(this.form);
        const rating = formData.get('rating');

        // Update the rating result
        if (this.ratingScore && rating) {
            this.ratingScore.textContent = `You selected ${rating} out of 5`;
        }

        // Show the success message and hide the rating form
        if (this.ratingContainer) this.ratingContainer.classList.add('hidden');
        if (this.successContainer) this.successContainer.classList.remove('hidden');
    }
};

window.addEventListener('load', () => {
    App.init();
});
