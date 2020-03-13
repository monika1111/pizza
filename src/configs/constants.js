import Cesar from './../images/Ceasar.png';
import Cheeseburger from './../images/Cheeseburger.jpg';
import Julietta from './../images/Julietta.jpg';
import Margarita from './../images/Margarita.jpg';
import Pepperoni from './../images/Pepperoni.png';
import Sureme from './../images/Sureme.png';

export const pizzas = [
    {
        id: 1,
        name: 'Cesar',
        weight: 100,
        price: 2500,
        type: 'Sicilian',
        quantityProperties: 4,
        image: Cesar
    },
    {
        id: 2,
        name: 'Cheeseburger',
        weight: 300,
        price: 2300,
        type: 'Chicago',
        quantityProperties: 6,
        image: Cheeseburger
    },
    {
        id: 3,
        name: 'Julietta',
        weight: 150,
        price: 2800,
        type: 'Greek',
        quantityProperties: 5,
        image: Julietta
    },
    {
        id: 4,
        name: 'Margarita',
        weight: 100,
        price: 1900,
        type: 'Greek',
        quantityProperties: 5,
        image: Margarita
    },
    {
        id: 5,
        name: 'Pepperoni',
        weight: 230,
        price: 2300,
        type: 'Greek',
        quantityProperties: 7,
        image: Pepperoni
    },
    {
        id: 6,
        name: 'Sureme',
        weight: 200,
        price: 2500,
        type: 'Neapolitan',
        quantityProperties: 5,
        image: Sureme
    }
];

export const extraIngredients = [
    {value: 'Bacon', label: 'Bacon, price: 200', price: 200},
    {value: 'Onion', label: 'Onion, price: 300', price: 300},
    {value: 'Spinach', label: 'Spinach, price:200', price: 200},
    {value: 'Mushrooms', label: 'Mushrooms, price:150', price: 150},
    {value:'Olives', label: 'Olives, price: 450', price: 450},
    {value: 'Corn', label: 'Corn, price: 300', price: 300},
    {value: 'Extra Cheese', label: 'Extra Cheese, price: 100', price: 100},
    {value: 'Tomato', label: 'Tomato, price: 250', price: 250}
];