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
        // 初始化 DOM 元素
        this.form = document.querySelector('.rating-form');
        this.ratingScore = document.querySelector('.rating-score');
        this.ratingContainer = document.querySelector('.rating-container');
        this.successContainer = document.querySelector('.success-container');

        // 检查元素是否存在
        console.assert(this.form !== null, 'form element not found');
        console.assert(this.ratingScore !== null, 'ratingScore element not found');
        console.assert(this.ratingContainer !== null, 'ratingContainer element not found');
        console.assert(this.successContainer !== null, 'successContainer element not found');

        // 添加事件监听器
        if (this.form) this.form.addEventListener('submit', this.handleSubmit.bind(this));
        if (this.successContainer) this.successContainer.addEventListener('click', this.back.bind(this));
    },

    back() {
        // 显示评分表单，隐藏成功消息
        if (this.ratingContainer) this.ratingContainer.classList.remove('hidden');
        if (this.successContainer) this.successContainer.classList.add('hidden');
    },

    /**
     * @param {Event} event
     */
    handleSubmit(event) {
        event.preventDefault();

        // 获取表单数据
        const formData = new FormData(this.form);
        const rating = formData.get('rating');

        // 更新评分结果
        if (this.ratingScore && rating) {
            this.ratingScore.textContent = `You selected ${rating} out of 5`;
        }

        // 显示成功消息，隐藏评分表单
        if (this.ratingContainer) this.ratingContainer.classList.add('hidden');
        if (this.successContainer) this.successContainer.classList.remove('hidden');
    }
};

window.addEventListener('load', () => {
    App.init();
});
