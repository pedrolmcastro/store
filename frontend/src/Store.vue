<script>
    import { reactive } from "vue";


    const global = reactive({
        user: undefined,
        cart: [],
    });


    global.logged = function() {
        return this.user !== undefined;
    }


    // Cart

    global.add = function(product) {
        if (this.cart.find(item => item.product.id === product.id) === undefined) {
            alert(`Product "${product.name}" added to cart.`);
            this.cart.push({ product: product, quantity: 1 });
        }
    }

    global.remove = function(removed) {
        if (confirm(`Product "${removed.product.name}" will be removed from cart.`)) {
            this.cart = this.cart.filter(item => item.product.id !== removed.product.id);
        }
    }


    // Formating

    global.image = function(product) {
        return "@/assets/products/" + product.image;
    }

    global.price = function(cents) {
        return '$' + (cents / 100).toFixed(2);
    }

    global.date = function(date) {
        date = new Date(date + " 00:00"); // Convert to Date Object
        return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getFullYear());
    }

    global.id = function(user) {
        return '#' + user.id.padStart(4, '0');
    }


    export default global;
</script>
