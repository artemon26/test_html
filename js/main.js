const size = document.getElementsByClassName('size')[0],
    imgWin = document.getElementsByClassName('imgWin')[0],
    img = imgWin.getElementsByTagName('img'),
    giveBtn = document.getElementById('giveBtn'),
    inputNumber = document.getElementById('number'),
    nameWindow = document.getElementsByClassName('nameWindow')[0];

inputNumber.addEventListener('keyup', () => giveBtn.disabled = !(inputNumber.value.trim() && /^((\+?375\-?)|(8\-?0))(29|25|44|33)\-?(\d{3})\-?(\d{2})\-?(\d{2})$/i.test(inputNumber.value.trim())));

// Переключение окон
size.addEventListener('click', event => {
    let target = event.target;

    if (target.tagName === 'IMG') {
        for (let i = 0; i < img.length; i++) {
            target.dataset.id === img[i].dataset.id ? img[i].style.display = 'block' : img[i].style.display = 'none';
        }
        name(target.dataset.id);

    } else if (target.className === 'window') {

        let searchImg = target.children[0].childNodes[1];

        for (let i = 0; i < img.length; i++) {
            searchImg.dataset.id === img[i].dataset.id ? img[i].style.display = 'block' : img[i].style.display = 'none';
        }
        name(searchImg.dataset.id);

    } else if (target.tagName === 'P') {

        let searchImgP = target.parentNode.parentNode.children[0].childNodes[1];

        for (let i = 0; i < img.length; i++) {
            searchImgP.dataset.id === img[i].dataset.id ? img[i].style.display = 'block' : img[i].style.display = 'none';
        }
        name(searchImgP.dataset.id);
    }

    function name(p) {
        switch (p) {
            case '1':
                nameWindow.textContent = 'Одностворчатое окно KBE';
                break;
            case '2':
                nameWindow.textContent = 'Двухстворчатое окно KBE';
                break;
            case '3':
                nameWindow.textContent = 'Трехстворчатое окно KBE';
                break;
            case '4':
                nameWindow.textContent = 'Балконный блок';
                break;
            case '5':
                nameWindow.textContent = 'Остекление балкона';
                break;
        }
    }
});
//

// Модалка
function showCover() {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';

    // убираем возможность прокрутки страницы во время показа модального окна с формой
    document.body.style.overflowY = 'hidden';

    document.body.append(coverDiv);
}

function hideCover() {
    document.getElementById('cover-div').remove();
    document.body.style.overflowY = '';
}

function showPrompt() {
    showCover();
    let container = document.getElementById('prompt-form-container');
    document.getElementById('prompt-form').innerHTML = '<p>Сообщение отправлено</p>';

    function complete() {
        hideCover();
        container.style.display = 'none';
    }

    container.onclick = function() {
        complete();
    };

    document.onkeydown = function(e) {
        if (e.key == 'Escape') {
            complete();
        }
    };

    container.style.display = 'block';

}

document.getElementById('giveBtn').onclick = function() {
    showPrompt();
};
//
