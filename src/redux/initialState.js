export const initialState = {
    products:{
        pizza:[
            {name:"Chicken Dominator",
            ingredient: ["Pepper", "Barbecue Chicken", "Peri-Peri Chicken", "Chicken Tikka", "Grilled Chicken Rashers"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.45},

            {name:"Pepper Barbecue & Onion",
            ingredient: ["Pepper", "Barbecue", "Chicken", "Onion"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.4},

            {name:"Chicken Fiesta",
            ingredient: ["Grilled Chicken Rashers", "Peri-Peri Chicken", "Onion", "Capsicum"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.4},

            {name:"Indi Chicken Tikka",
            ingredient: ["Chicken Tikka", "Onion", "Red Paprika", "Mint Mayo"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.4},

            {name:"Chicken Sausage", 
            ingredient: ["Chicken Sausage", "Cheese"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.25}
        ],
        drinks:{
            coffee:[
                {name: "Latte",
                size:[0.25, 0.45],
                priceIndex: 12},

                {name: "Macchiato",
                size:[0.25, 0.45],
                priceIndex: 12},

                {name: "Espresso",
                size:[0.25, 0.45],
                priceIndex: 11},

                {name: "Americano",
                size:[0.25, 0.45],
                priceIndex: 11},
            ],
            lemonade:[
                {name: "Coca-Cola",
                size:[0.35, 0.5, 1],
                priceIndex: 8},

                {name: "Pepsi",
                size:[0.35, 0.5, 1],
                priceIndex: 8},

                {name: "Sprite",
                size:[0.35, 0.5, 1],
                priceIndex: 8},
            ]
        },
        burgers:[
            {name:"Chicken Burger", 
            ingredient: ["Chicken", "Cheese", "Tomato"],
            isVeg: false,
            priceIndex: 6.20},

            {name:"Fish Burger", 
            ingredient: ["Fish", "Cheese", "Onion", "Mushrooms"],
            isVeg: true,
            price: 8.20},
        ]
    },
    cart:[]
}