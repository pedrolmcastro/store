<script>
    import axios from "axios";
    import { reactive } from "vue";


    const global = reactive({
        token: undefined,
        user: undefined,
        cart: [],
    });


    // User

    global.login = async function(token) {
        this.token = token;
        axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
        
        const response = (await axios.get("users/me"));

        if (response.status === 200) {
            localStorage.setItem("token", token);
            this.user = response.data;
        }
        else {
            this.token = undefined;
        }   
    };

    global.logout = function() {
        this.user = undefined;
        this.token = undefined;
        localStorage.removeItem("token");
    };

    global.logged = function() {
        return this.user !== undefined;
    };


    // Cart

    global.add = function(product) {
        if (this.cart.find(item => item.product.id === product.id) === undefined) {
            alert(`Product "${product.name}" added to the cart.`);
            this.cart.push({ product: product, quantity: 1 });
        }
        else {
            alert(`Product "${product.name}" already added to the cart.`);
        }
    };

    global.remove = function(removed) {
        if (confirm(`Product "${removed.product.name}" will be removed from the cart.`)) {
            this.cart = this.cart.filter(item => item.product.id !== removed.product.id);
        }
    };

    global.clear = function() {
        this.cart = [];
    };

    global.empty = function() {
        return this.cart.length === 0;
    };


    // Formating

    global.price = function(cents) {
        return '$' + (cents / 100).toFixed(2);
    };

    global.date = function(date) {
        date = new Date(date + " 00:00"); // Convert to Date Object
        return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + String(date.getFullYear());
    };

    global.id = function(user) {
        return '#' + user?.id.padStart(4, '0');
    };


    export default global;
</script>
