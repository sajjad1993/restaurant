var restaurant = Vue.component('restaurant', {
    template: '#res-id',
    props: ['food','b'],
    data: function () {
        return {
            basket: [],
        }
    },
    methods: {
        order: function (food) {
            if (this.isOrder(food)) {

                food.qty++;

            }
            else {
                food.order = true;
                food.qty++;
                this.basket.push(food);
                this.b.push(food);

            }

        },
        isOrder: function (food) {
            return (food.order == true);
        },

    },



});

Vue.component('cart', {
    template: '#card-id',
    components: {
        restaurant: restaurant,
    },
    props: ['basket','b'],
    methods: {
        removeItem:function(food){

            food.order = false;
            var index = this.b.indexOf(food.name);

            this.b.splice(index, 1)
        }
    },

    computed: {
        sumprice: function () {
            var price = 0;
            for (var i = 0; i < this.b.length; i++) {
                price += this.b[i].price * this.b[i].qty;
            }
            return price;
        },
        total: function () {
            return this.b.length;
        },
    }


});
new Vue({
    el: '#app',
    data: {
        b:       [],
        message: [],
        foods: [
            {
                type: 'پیتزا ',
                items: [
                    {name: 'رست بیف', price: 20000, order: false, qty: 0, total: 8},
                    {name: 'قارچ و گوشت', price: 15000, order: false, qty: 0, total: 8},
                    {name: 'پپرونی', price: 12000, order: false, qty: 0, total: 8},
                    {name: 'سبزیجات', price: 18000, order: false, qty: 0, total: 8},
                    {name: 'قارچ و مرغ', price: 10000, order: false, qty: 0, total: 8}
                ]
            },

            {
                type: 'ساندویچ',
                items: [
                    {name: 'هات داگ', price: 8000, order: false, qty: 0, total: 8},
                    {name: 'ساندویچ مرغ', price: 6000, order: false, qty: 0, total: 8},
                    {name: 'ساندویچ خوراک مکزیکی', price: 4500, order: false, qty: 0, total: 8}

                ]
            },

            {
                type: 'برگر',
                items: [
                    {name: 'چیز برگر', price: 10000, order: false, qty: 0, total: 8},
                    {name: 'ذغال برگر', price: 9000, order: false, qty: 0, total: 8},
                    {name: 'قارچ برگر', price: 6000, order: false, qty: 0, total: 8},
                    {name: 'دوبل برگر', price: 17000, order: false, qty: 0, total: 8}
                ]
            },

            {
                type: 'سوخاری',
                items: [
                    {name: 'قارچ سوخاری', price: 16000, order: false, qty: 0, total: 8},
                    {name: 'اسپایسی ۵ تکه', price: 14000, order: false, qty: 0, total: 8},
                    {name: 'اسپایسی ۴ تکه', price: 16000, order: false, qty: 0, total: 8},
                    {name: 'پیاز سوخاری', price: 4000, order: false, qty: 0, total: 8},
                ]
            },

            {
                type: 'سالاد و پیش غذا',
                items: [
                    {name: 'سالاد ماکارونی', price: 3000, order: false, qty: 0, total: 8},
                    {name: 'سالاد فصل', price: 1000, order: false, qty: 0, total: 8},
                    {name: 'سالاد کلم', price: 1500, order: false, qty: 0, total: 8},
                    {name: 'سالاد فرانسوی', price: 4500, order: false, qty: 0, total: 8},
                    {name: 'سالاد ایتالیایی', price: 6500, order: false, qty: 0, total: 8},
                    {name: 'سالاد ترکی', price: 7000, order: false, qty: 0, total: 8}

                ]
            }
        ],
        costumer: {}
    },
    methods: {
        addMessage: function (msg) {
            this.message.push(msg);
        }
    }
})