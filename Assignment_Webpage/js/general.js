let selectedFoodType = "";

const checkedMap = new Map();
checkedMap.set('bread', false);
checkedMap.set('ketchup', false);
checkedMap.set('patty', false);
checkedMap.set('tomato', false);
checkedMap.set('salad', false);
checkedMap.set('onion', false);
checkedMap.set('mayonnaise', false);
checkedMap.set('french-fries', false);
checkedMap.set('ketchup-dip', false);
checkedMap.set('pepsi', false);
checkedMap.set('coffee', false);
checkedMap.set('mcflurry', false);
checkedMap.set('spiderman-toy', false);
// Pizza
checkedMap.set('tomato-sauce', false);
checkedMap.set('cheese', false);
checkedMap.set('ham', false);
checkedMap.set('mushroom', false);
checkedMap.set('pineapple', false);
checkedMap.set('pizza-salad', false);
checkedMap.set('coke', false);

const nameTillbehorMap = new Map();
// Burger
nameTillbehorMap.set('bread', "Bröd");
nameTillbehorMap.set('ketchup', "Ketchup");
nameTillbehorMap.set('patty', "Kött");
nameTillbehorMap.set('tomato', "Tomat");
nameTillbehorMap.set('salad', "Sallad");
nameTillbehorMap.set('onion', "Lök");
nameTillbehorMap.set('mayonnaise', "Majonnäs");
// Pizza
nameTillbehorMap.set('tomato-sauce', "Tomatsås");
nameTillbehorMap.set('cheese', "Ost");
nameTillbehorMap.set('ham', "Skinka");
nameTillbehorMap.set('mushroom', "Champinjoner");
nameTillbehorMap.set('pineapple', "Ananas");

const nameExtraMap = new Map();
// Burger

nameExtraMap.set('french-fries', "Pommes frites");
nameExtraMap.set('ketchup-dip', "Ketchup");
nameExtraMap.set('pepsi', "Pepsi");
nameExtraMap.set('coffee', "Kaffe");
nameExtraMap.set('mcflurry', "McFlurry");
nameExtraMap.set('spiderman-toy', "Spiderman-leksak");
// Pizza

nameExtraMap.set('pizza-salad', "Pizzasallad");
nameExtraMap.set('coke', "Coca-Cola");

const priceMap = new Map();
// Burger
priceMap.set('bread', 7);
priceMap.set('ketchup', 3);
priceMap.set('patty', 8);
priceMap.set('tomato', 3);
priceMap.set('salad', 2);
priceMap.set('onion', 3);
priceMap.set('mayonnaise', 3);
priceMap.set('french-fries', 15);
priceMap.set('ketchup-dip', 8);
priceMap.set('pepsi', 10);
priceMap.set('coffee', 8);
priceMap.set('mcflurry', 23);
priceMap.set('spiderman-toy', 329);
// Pizza
priceMap.set('tomato-sauce', 15);
priceMap.set('cheese', 18);
priceMap.set('ham', 16);
priceMap.set('mushroom', 12);
priceMap.set('pineapple', 35);
priceMap.set('pizza-salad', 2);
priceMap.set('coke', 10);

const saveOrderCookies = function()
{
    // set path
    const cookiePath = "path=/";

    // set expiration date
    date = new Date();
    date.setTime(date.getTime() + 3600);
    const cookieExpire = "expires=" + date.toUTCString() + ";";

    document.cookie = selectedFoodType + cookieExpire + cookiePath;

    checkedMap.forEach((value, key) =>
    {
        let cookieCheck = key + "=" + value + ";";
        let str = cookieCheck + cookieExpire + cookiePath;
        document.cookie = str;

    });
};

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    let cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}