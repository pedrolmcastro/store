# Gaming Desktop Store
- Buy computer parts
- Buy prebuilt PCs (admin can create them)
- Buy custom PCs (PC customization wizard)

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
- /store/custom/
- /store/categories/prebuilt/
- /store/categories/?cat=[cpu, powersupply, mobo]&order=[price, alfa]&descending=false/

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
- /users/me/cart/
- /users/me/cart/checkout

- /products/

# Models
```
user = {
    id
    name
    phone
    email
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

## Compatibility
- Sockets [AM4, LGA1700]
- DDR [DDR4, DDR5]
- Ram Slots [2, 4]
- Size [Atx, Micro Atx]
- Slot [SATA3, M2, M2NVME]
- Pins [4, 6, 8]
- Connectors (6+6, 6+8, 8+8)

## Relations
- Mobo <-> CPU (Socket)
- Mobo <-> RAM (DDR, Ram Slots)
- Mobo <-> Case (Size)
- Mobo <-> Drive (Slot)
- PSU <-> Case (Size)
- PSU <-> Mobo (Pins)
- PSU <-> GPU (Connectors)

P






