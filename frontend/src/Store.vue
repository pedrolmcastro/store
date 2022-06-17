<script>
    import { reactive } from "vue";


    const global = reactive({
        user: undefined,
        cart: [],
    });

    global.logged = function() {
        return this.user !== undefined;
    }
    
    global.add = function(product) {
        if (this.cart.find(item => item.product.id === product.id) === undefined) this.cart.push({ product: product, quantity: 1 });
        // TODO: Confirmation Pop Up
    }

    global.price = function(cents) {
        return '$' + (cents / 100).toFixed(2);
    }


    export default global;
</script>
