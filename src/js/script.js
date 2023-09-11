// DOM ELEMENTS
const allBtns = document.querySelectorAll('.category_btns button');


allBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        localStorage.setItem('lanCategory', btn.getAttribute("data-name"));
        localStorage.removeItem('setFont');
        location.href = '/hadith.html';

    });
    allBtns[0].addEventListener('click', () => {
        localStorage.setItem('setFont', "arabic");
    });
});

