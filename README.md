# Gaming Gem, A Gaming Desktop Store
## Name of Students:
- Lucas Massao Fukusawa Dagnone - 11295810
-
- 

# 1. Requirements
# Frontend

## Pages
### Session
- /login/
- /register/

### Admin pages
- /admin/ 
- /admin/products/
- /admin/users/

### Store
- /store/
- /store/products/
- /store/products/:id

### User pages
- /me/
- /me/cart/
- /me/cart/checkout/

# Backend
## Endpoints
- /login/
- /register/
- /users/
- /users/me/
- /transactions/
- /cart/
- /cart/checkout/
- /products/?type=[cpu, powersupply, mobo, ...]&order=[price, name]&descending=false

# Models
```
user = {
    id
    name
    phone
    email
    hashed_password
    role
}

product = {
    id
    name
    description
    photo
    price
    stock_amount
    sold_amount
    product_type
    product_compatibility
}
```

# Components
## List of components
### Main
- Case
- Power Supply
- Motherboard
- RAM
- CPU
- Drive
- GPU

### Extras
- Fans
- Coolers
- RGB

# 2. Project Description

