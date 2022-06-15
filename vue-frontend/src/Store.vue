<script>
    import { reactive } from "vue";


    const global = reactive({
        user: undefined,
        cart: [],
    });

    global.logged = function() {
        return this.user !== undefined;
    }
    
    global.add = function(id) {
        if (this.cart.find(item => item.id === id) === undefined) this.cart.push({ id: id, quantity: 1 });
        // TODO: Confirmation Pop Up
    }

    global.price = function(cents) {
        return '$' + (cents / 100).toFixed(2);
    }


    export default global;
</script>
