const burgerButton = document.getElementById('burger-button');
const navigationList = document.getElementById('navigation-list');

burgerButton.addEventListener('click', () =>
{
    navigationList.classList.toggle('active');
});