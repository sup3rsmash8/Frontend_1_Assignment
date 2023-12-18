

let totalCost = 0.0;

const burgerMenu = document.getElementById('burger-menu');
const pizzaMenu = document.getElementById('pizza-menu');

const foodsDropdown = document.getElementById('foods-dropdown');

// Burger
const breadBtn = document.getElementById('bread');
const ketchupBtn = document.getElementById('ketchup');
const pattyBtn = document.getElementById('patty');
const tomatoBtn = document.getElementById('tomato');
const saladBtn = document.getElementById('salad');
const onionBtn = document.getElementById('onion');
const mayonnaiseBtn = document.getElementById('mayonnaise');
const frenchFriesBtn = document.getElementById('french-fries');
const ketchupDipBtn = document.getElementById('ketchup-dip');
const pepsiBtn = document.getElementById('pepsi');
const coffeeBtn = document.getElementById('coffee');
const mcFlurryBtn = document.getElementById('mcflurry');
const spiderManToyBtn = document.getElementById('spiderman-toy');


// Pizza
const tomatoSauceBtn = document.getElementById('tomato-sauce');
const cheeseBtn = document.getElementById('cheese');
const hamBtn = document.getElementById('ham');
const mushroomBtn = document.getElementById('mushroom');
const pineappleBtn = document.getElementById('pineapple');
const pizzaSaladBtn = document.getElementById('pizza-salad');
const cokeBtn = document.getElementById('coke');

const totalPayAmountText = document.getElementById('total-pay-amount');
const checkoutButton = document.getElementById('checkout-button');

const setMenuState = function(menu, active)
{
    if (active)
    {
        menu.classList.remove('menu-inactive');
        menu.classList.add('menu-active');
    }
    else
    {
        if (menu === burgerMenu)
        {
            setCheckboxCheckedState(breadBtn, false);
            setCheckboxCheckedState(ketchupBtn, false);
            setCheckboxCheckedState(pattyBtn, false);
            setCheckboxCheckedState(tomatoBtn, false);
            setCheckboxCheckedState(saladBtn, false);
            setCheckboxCheckedState(onionBtn, false);
            setCheckboxCheckedState(mayonnaiseBtn, false);
            setCheckboxCheckedState(frenchFriesBtn, false);
            setCheckboxCheckedState(ketchupDipBtn, false);
            setCheckboxCheckedState(pepsiBtn, false);
            setCheckboxCheckedState(coffeeBtn, false);
            setCheckboxCheckedState(mcFlurryBtn, false);
            setCheckboxCheckedState(spiderManToyBtn, false);
        }
        else
        {
            setCheckboxCheckedState(tomatoSauceBtn, false);
            setCheckboxCheckedState(cheeseBtn, false);
            setCheckboxCheckedState(hamBtn, false);
            setCheckboxCheckedState(mushroomBtn, false);
            setCheckboxCheckedState(pineappleBtn, false);
            setCheckboxCheckedState(pizzaSaladBtn, false);
            setCheckboxCheckedState(cokeBtn, false);
        }

        menu.classList.remove('menu-active');
        menu.classList.add('menu-inactive');
    }
}

foodsDropdown.addEventListener('click', () =>
{
    const value = foodsDropdown.value;
    //const text = foodsDropdown.options[foodsDropdown.selectedIndex];
    switch (value)
    {
        case 'none':
            setMenuState(burgerMenu, false);
            setMenuState(pizzaMenu, false);
            break;

        case 'hamburger':
            setMenuState(burgerMenu, true);
            setMenuState(pizzaMenu, false);
            selectedFoodType = "hamburger";
            break;

        case 'pizza':
            setMenuState(burgerMenu, false);
            setMenuState(pizzaMenu, true);
            selectedFoodType = "pizza";
            break;
    }
});

const onCheckboxClicked = function(element)
{
    checkedMap.set(element.name, element.checked);
    if (element.checked)
    {
        totalCost += priceMap.get(element.name);
    }
    else
    {
        totalCost -= priceMap.get(element.name);
    }

    console.log(checkedMap[element.name]);

    totalPayAmountText.innerHTML = "Att betala: " + totalCost + "kr";
}

const setCheckboxCheckedState = function(element, active)
{
    const prev = element.checked;
    element.checked = active;

    if (element.checked !== prev)
        onCheckboxClicked(element);
}

// Burger
breadBtn.addEventListener('change', () =>        onCheckboxClicked(breadBtn));
ketchupBtn.addEventListener('change', () =>      onCheckboxClicked(ketchupBtn));
pattyBtn.addEventListener('change', () =>        onCheckboxClicked(pattyBtn));
tomatoBtn.addEventListener('change', () =>       onCheckboxClicked(tomatoBtn));
saladBtn.addEventListener('change', () =>        onCheckboxClicked(saladBtn));
onionBtn.addEventListener('change', () =>        onCheckboxClicked(onionBtn));
mayonnaiseBtn.addEventListener('change', () =>   onCheckboxClicked(mayonnaiseBtn));
frenchFriesBtn.addEventListener('change', () =>  onCheckboxClicked(frenchFriesBtn));
ketchupDipBtn.addEventListener('change', () =>   onCheckboxClicked(ketchupDipBtn));
pepsiBtn.addEventListener('change', () =>        onCheckboxClicked(pepsiBtn));
coffeeBtn.addEventListener('change', () =>       onCheckboxClicked(coffeeBtn));
mcFlurryBtn.addEventListener('change', () =>     onCheckboxClicked(mcFlurryBtn));
spiderManToyBtn.addEventListener('change', () => onCheckboxClicked(spiderManToyBtn));
// Pizza
tomatoSauceBtn.addEventListener('change', () =>  onCheckboxClicked(tomatoSauceBtn));
cheeseBtn.addEventListener('change', () =>       onCheckboxClicked(cheeseBtn));
hamBtn.addEventListener('change', () =>          onCheckboxClicked(hamBtn));
mushroomBtn.addEventListener('change', () =>     onCheckboxClicked(mushroomBtn));
pineappleBtn.addEventListener('change', () =>    onCheckboxClicked(pineappleBtn));
pizzaSaladBtn.addEventListener('change', () =>   onCheckboxClicked(pizzaSaladBtn));
cokeBtn.addEventListener('change', () =>         onCheckboxClicked(cokeBtn));

// Go to checkout
checkoutButton.addEventListener('click', () =>
{
    console.log(totalCost);
    if (totalCost <= 0)
    {
        alert("Du måste välja något först.");
    }
    else
    {
        saveOrderCookies();
        window.location = "confirm_order.html";
    }
});

