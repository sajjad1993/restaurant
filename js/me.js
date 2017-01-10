Vue.component('plan', {
    template: '#plan-id',
    props: ['products', 'subject'],
    data: function () {
        return {
            basket: [],
        }
    },
    methods: {
        order: function (product) {
            if (product.order == false) {
                product.order = true;
                this.basket.push(product);
            }
            else {
                product.order = false;

                var index = this.basket.indexOf(product)
                this.basket.splice(index, 1)
            }
        },
        isOrder: function (product) {
            return (product.order == true);
        }
    },
    computed: {
        sumprice: function () {
            var price = 0;
            for (var i = 0; i < this.basket.length; i++) {
                price += this.basket[i].price;
            }
            return price;
        },
        total: function () {
            return this.basket.length;
        },
    }
});
var parent = new Vue({
    el: '#app',
    data: {
        message: [],
        products: [
            {
                name:'موبایل',
                items: [
                    {name: 'گوشی 1', price: 1000, order: false},
                    {name: 'گوشی 2', price: 700, order: false},
                    {name: 'گوشی 3', price: 500, order: false},
                    {name: 'گوشی 4', price: 300, order: false},
                    {name: 'گوشی 5', price: 100, order: false}
                ]
            },

            {
                name:'لبتاپ',
                items: [
                    {name: 'لپ تاپ 1', price: 21000, order: false},
                    {name: 'لپ تاپ 2', price: 2700, order: false},
                    {name: 'لپ تاپ 3', price: 2500, order: false},
                    {name: 'لپ تاپ 4', price: 2300, order: false},
                    {name: 'لپ تاپ 5', price: 2100, order: false}
                ]
            }
        ]
    },
    methods: {
        addMessage: function (msg) {
            this.message.push(msg);
        }
    }
})