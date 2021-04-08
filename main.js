const toggleButton = document.getElementsByClassName('togle__filter')[0];
const filterLinks = document.getElementsByClassName('filter__item');
const filterContent = document.getElementsByClassName('filter__content')[0]
toggleButton.addEventListener('click', function(){
    for(let i=0; i<filterLinks.length; i++){
        filterLinks[i].classList.toggle('active');
        filterContent.classList.toggle('active');
    }
})