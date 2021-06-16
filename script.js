const toggleBtn = document.querySelector('.dropdown');
const navigation = document.querySelector('header .navigation');

toggleBtn.addEventListener('click', () => {
    if(navigation.classList.contains('active')) {
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active');
    }
})