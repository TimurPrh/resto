let items = [{
    "title": "Cesar salad",
    "price": 12,
    "category": "salads",
    "id": 1
},
{
    "title": "Pizza Margherita",
    "price": 10,
    "category": "pizza",
    "id": 2
}];
const extId = 2;
if (items.findIndex(item => item.id === extId)){
    console.log('done');
}

items[0].id++;
console.log(items);