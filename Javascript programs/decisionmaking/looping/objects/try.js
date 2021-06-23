// Comparing based on the property item
function compare_item(a, b){
    // a should come before b in the sorted order
    if(a.item < b.item){
            return -1;
    // a should come after b in the sorted order
    }else if(a.item > b.item){
            return 1;
    // and and b are the same
    }else{
            return 0;
    }
}
//Comparing based on the property qty
function compare_qty(a, b){
    // a should come before b in the sorted order
    if(a.qty < b.qty){
            return -1;
    // a should come after b in the sorted order
    }else if(a.qty > b.qty){
            return 1;
    // a and b are the same
    }else{
            return 0;
    }
}
cart = [{item: "Berry", qty: 1},
    {item: "Apple", qty: 2},
    {item: "Kiwi", qty: 3}];
console.log("Object to be sorted");
console.log(cart);
console.log("Sorting based on the item property");
console.log(cart.sort(compare_item));
console.log("Sorting based on the qty property");
console.log(cart.sort(compare_qty));