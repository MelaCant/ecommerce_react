
const products = [
    {
        "id": 1,
        "name": "Remera Baby",
        "price": "5100",
        "description": "Remera Baby",
        "image": require('./assets/indumentaria/remera(1).jpg'),
        "stock": 4,
        "category": "remeras"
    },
    {
        "id": 2,
        "name": "Remera Smoke",
        "price": "3700",
        "description": "Remera Smoke",
        "image": require("./assets/indumentaria/remera(2).jpg"),
        "stock": 3,
        "category": "remeras"
    },
    {
        "id": 3,
        "name": "Remera Valhalla",
        "price": "7500",
        "description": "Remera Valhalla",
        "image": require("./assets/indumentaria/remera(3).jpg"),
        "stock": 1,
        "category": "remeras"
    },
    {
        "id": 4,
        "name": "Remera volados Bones",
        "price": "5500",
        "description": "Remera volados Bones",
        "image": require("./assets/indumentaria/remera(4).jpg"),
        "stock": 2,
        "category": "remeras"
    },
    {
        "id": 5,
        "name": "Camisa vintage",
        "price": "6000",
        "description": "Camisa vintage",
        "image": require("./assets/indumentaria/camisa(1).jpg"),
        "stock": 3,
        "category": "camisas"
    },
    {
        "id": 6,
        "name": "Camisa nudo",
        "price": "8500",
        "description": "Camisa nudo",
        "image": require("./assets/indumentaria/camisa(2).jpg"),
        "stock": 5,
        "category": "camisas"
    },
    {
        "id": 7,
        "name": "Camisa básica blanca",
        "price": "7200",
        "description": "Camisa",
        "image": require("./assets/indumentaria/camisa(3).jpg"),
        "stock": 2,
        "category": "camisas"
    },
    {
        "id": 8,
        "name": "Camisa Safary",
        "price": "8000",
        "description": "Camisa",
        "image": require("./assets/indumentaria/camisa(4).jpg"),
        "stock": 5,
        "category": "camisas"
    },  
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}
