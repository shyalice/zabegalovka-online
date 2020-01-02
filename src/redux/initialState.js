export const initialState = {
    products:{
        pizza:[
            {type: "pizza",
            name:"Chicken Dominator",
            ingredient: ["Pepper", "Barbecue Chicken", "Peri-Peri Chicken", "Chicken Tikka", "Grilled Chicken Rashers"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.45},

            {type: "pizza",
            name:"Pepper Barbecue & Onion",
            ingredient: ["Pepper", "Barbecue", "Chicken", "Onion"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.4},

            {type: "pizza",
            name:"Chicken Fiesta",
            ingredient: ["Grilled Chicken Rashers", "Peri-Peri Chicken", "Onion", "Capsicum"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.4},

            {type: "pizza",
            name:"Indi Chicken Tikka",
            ingredient: ["Chicken Tikka", "Onion", "Red Paprika", "Mint Mayo"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.4},

            {type: "pizza",
            name:"Chicken Sausage", 
            ingredient: ["Chicken Sausage", "Cheese"],
            isVeg: false,
            size:[35, 30, 25],
            priceIndex: 0.25}
        ],
        drinks:{
            coffee:[
                {type: "coffee",
                name: "Latte",
                size:[0.25, 0.45],
                priceIndex: 12},

                {type: "coffee",
                name: "Macchiato",
                size:[0.25, 0.45],
                priceIndex: 12},

                {type: "coffee",
                name: "Espresso",
                size:[0.25, 0.45],
                priceIndex: 11},

                {type: "coffee",
                name: "Americano",
                size:[0.25, 0.45],
                priceIndex: 11},
            ],
            lemonade:[
                {type: "lemonade",
                name: "Coca-Cola",
                size:[0.35, 0.5, 1],
                priceIndex: 8},

                {type: "lemonade",
                name: "Pepsi",
                size:[0.35, 0.5, 1],
                priceIndex: 8},

                {type: "lemonade",
                name: "Sprite",
                size:[0.35, 0.5, 1],
                priceIndex: 8},
            ]
        },
        burgers:[
            {type: "burger",
            name:"Chicken Burger", 
            ingredient: ["Chicken", "Cheese", "Tomato"],
            isVeg: false,
            priceIndex: 6.20},

            {type: "burger",
            name:"Fish Burger", 
            ingredient: ["Fish", "Cheese", "Onion", "Mushrooms"],
            isVeg: true,
            price: 8.20},
        ]
    },
    cart:[]
}