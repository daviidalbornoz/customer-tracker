let customers = [
    {
        customerName: "Alex Taylor",
        email: "alextaylor@usf.edu",
        purchases: [
            "Blue Shirt",
            "Black Socks",
            "Brown Belt"
        ]
    },
    {
        customerName: "Jordan Smith",
        email: "jordansmith@usf.edu",
        purchases: [
            "White Shirt",
            "Blue Jeans",
            "Grey Jacket"
        ]
    },
    {
        customerName: "Casey Miller",
        email: "caseymiller@usf.edu",
        purchases: [
            "Black Shirt",
            "White Socks",
            "Black Shoes"
        ]
    },
    {
        customerName: "Morgan Reed",
        email: "morganreed@usf.edu",
        purchases: [
            "Gray Shirt",
            "Khaki Pants",
            "Baseball Cap"
        ]
    },
    {
        customerName: "Jamie Clark",
        email: "jamieclark@usf.edu",
        purchases: [
            "Navy Shirt",
            "Brown Wallet",
            "Red Heels"
        ]
    },
];

customers.push({
    customerName: "Taylor Quinn",
    email: "taylorquinn@usf.edu",
    purchases: [
        "Plain Hoodie",
        "Cotton Shorts",
        "Crew Socks"
    ]
});

customers.shift();

customers[0].email = "jordansmith@newemail.com";
customers[1].purchases.push("Winter Jacket");

customers.forEach(customer => {
    console.log(
        `Customer Name: ${customer.customerName}, Customer Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
        ``
    )
})