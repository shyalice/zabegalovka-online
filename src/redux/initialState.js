export const initialState = {
    products:{
        pizza:[
            {type: "pizza",
            name:"Chicken Dominator",
            ingredients: ["Pepper", "Barbecue Chicken", "Peri-Peri Chicken", "Chicken Tikka", "Grilled Chicken Rashers"],
            isVeg: false,
            size: 25,
            priceIndex: 0.45,
            count:1},

            {type: "pizza",
            name:"Pepper Barbecue & Onion",
            ingredients: ["Pepper", "Barbecue", "Chicken", "Onion"],
            isVeg: false,
            size: 25,
            priceIndex: 0.4,
            count:1},

            {type: "pizza",
            name:"Chicken Fiesta",
            ingredients: ["Grilled Chicken Rashers", "Peri-Peri Chicken", "Onion", "Capsicum"],
            isVeg: false,
            size: 25,
            priceIndex: 0.4,
            count:1},

            {type: "pizza",
            name:"Indi Chicken Tikka",
            ingredients: ["Chicken Tikka", "Onion", "Red Paprika", "Mint Mayo"],
            isVeg: false,
            size: 25,
            priceIndex: 0.4,
            count:1},

            {type: "pizza",
            name:"Chicken Sausage", 
            ingredients: ["Chicken Sausage", "Cheese"],
            isVeg: false,
            size: 25,
            priceIndex: 0.25,
            count:1}
        ],
        drinks:{
            coffee:[
                {type: "coffee",
                name: "Latte",
                size: 0.25,
                priceIndex: 12,
                count:1},

                {type: "coffee",
                name: "Macchiato",
                size: 0.25,
                priceIndex: 12,
                count:1},

                {type: "coffee",
                name: "Espresso",
                size: 0.25,
                priceIndex: 11,
                count:1},

                {type: "coffee",
                name: "Americano",
                size: 0.25,
                priceIndex: 11,
                count:1},
            ],
            lemonade:[
                {type: "lemonade",
                name: "Coca-Cola",
                size: 0.35,
                priceIndex: 8,
                count:1},

                {type: "lemonade",
                name: "Pepsi",
                size: 0.35,
                priceIndex: 8,
                count:1},

                {type: "lemonade",
                name: "Sprite",
                size: 0.35,
                priceIndex: 8,
                count:1},
            ]
        },
        burgers:[
            {type: "burger",
            name:"Chicken Burger", 
            ingredients: ["Chicken", "Cheese", "Tomato"],
            isVeg: false,
            price: 6.20,
            count:1},

            {type: "burger",
            name:"Fish Burger", 
            ingredients: ["Fish", "Cheese", "Onion", "Mushrooms"],
            isVeg: true,
            price: 8.20,
            count:1},
        ]
    },
    cart:[]
}