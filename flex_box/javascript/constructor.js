//constructor template or constructor function

function fruits(name,price,Kilo){
    this.fruit_name=name;
    this.amout_fruit=price;
    this.kilogram=Kilo;
}
// create the objects with new keyword
let shop_fruits=new fruits("Orange",100,1);
console.log(shop_fruits.fruit_name);
console.log(shop_fruits)
let shop_fruits_01=new fruits("apple",200,1);
console.log(shop_fruits_01)