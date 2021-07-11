export const ProductsData = {
    title: 'Fresho Onion, 1 kg',
    description: 'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo.',
    mrp: "MRP",
    vg: "./img/veg.png",
    mprice: 36.25,
    dprice: 19,
    price: "Price",
    currencey: <span>&#8360;&nbsp;</span>,
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'img/pro-1.jpg'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'img/1-fresho-onion.jpg'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'img/2-fresho-onion.jpg'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'img/3-fresho-onion.jpg'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductsData); //This Line of code just makes your object as a constant. No values can be updated.