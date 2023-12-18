const tillbehorMenu = document.getElementById('order-tillbehor');
const extraMenu = document.getElementById('order-extra');
const totalPayAmountText = document.getElementById('total-pay-amount');
const checkoutButton = document.getElementById('checkout-button');

console.log(document.cookie);
let money = 0;
checkedMap.forEach((value, key) =>
{

    let ticked = getCookie(key);
    console.log(key);
    if (ticked === 'true')
    {
        if (nameTillbehorMap.has(key))
            tillbehorMenu.innerHTML += nameTillbehorMap.get(key) + "<br/>";
        else
            extraMenu.innerHTML += nameExtraMap.get(key) + "<br/>";

        money += priceMap.get(key);
    }


});
totalPayAmountText.innerHTML = "Att betala: " + money + "kr";
//tillbehorMenu.innerHTML =

checkoutButton.addEventListener('click', () =>
{
    window.location = "thank_you.html";
});