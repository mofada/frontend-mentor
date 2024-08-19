const App = {
    /**
     * @type {HTMLFormElement}
     */
    form: null,
    /**
     * @type {HTMLDialogElement}
     */
    dialog: null,
    /**
     * @type {HTMLInputElement}
     */
    emailInput: null,
    /**
     * @type {HTMLDivElement}
     */
    emailError: null,


    init() {
        this.form = document.querySelector('form')
        this.dialog = document.querySelector('dialog')
        this.emailInput = document.querySelector('#email')
        this.emailError = document.querySelector('#email-error')

        this.form.addEventListener('submit', this.submit.bind(this))
        this.emailInput.addEventListener('input', this.validateEmail.bind(this))
        this.emailInput.addEventListener('focus', this.validateEmail.bind(this))
    },

    /**
     * @param {Event} event
     */
    submit(event) {
        event.preventDefault()

        const formData = new FormData(this.form)
        const data = Object.fromEntries(formData)
        console.log(data)

        this.dialog.showModal()
    },
    /**
     * @param {Event} event
     */
    validateEmail(event) {
        let target = event.target;
        let validity = target.validity;
        // Display different error texts according to the type
        if (validity.typeMismatch) {
            this.emailError.textContent = 'Please enter a valid email address.'
        } else if (validity.valueMissing) {
            this.emailError.textContent = 'This field is required.'
        }
    }
}

window.addEventListener('load', () => {
    App.init()
    console.log('App is running...')
})
