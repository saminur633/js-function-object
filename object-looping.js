
var friendsAge =[12,20,25,30,40,50];
var friendsAge = {
    rahim:12,
    fahim:20,
    karim:25,
    ashroda:30,
    faranda:40,
    samba:50

}
var shopingcart = {
    sunglass:1,
    books : 3,
    keyboard: 5,
    mouse : 1,
    pen: 25,
    shoes:2
}
const keys = Object.keys(shopingcart);
console.log(keys);
const values = Object.values(shopingcart);
console.log(values);

for(var propertyName in shopingcart){
    const value = shopingcart [propertyName];
   console.log(propertyName , value);
}
    
