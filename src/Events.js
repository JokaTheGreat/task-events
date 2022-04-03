/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Удали меня';

    button.addEventListener('click', function (event) {
        event.currentTarget.remove();
    });

    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = arr[i];

        li.addEventListener('mouseover', function (event) {
            const element = event.currentTarget;
            element.setAttribute('title', element.innerHTML);
        });

        ul.append(li);
    }

    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.innerHTML = 'tensor';
    link.setAttribute('href', 'https://tensor.ru/');

    link.addEventListener(
        'click',
        function (event) {
            const element = event.currentTarget;
            element.innerHTML += ' ' + element.getAttribute('href');

            event.preventDefault();
        },
        { once: true },
    );

    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    ul.innerHTML = '<li>Пункт</li>';

    ul.addEventListener('click', function (event) {
        const element = event.target;
        if (element && element.nodeName == 'LI') {
            element.innerHTML += '!';
        }
    });

    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';

    button.addEventListener('click', function () {
        const li = document.createElement('li');
        li.innerHTML = 'Пункт';

        ul.append(li);
    });

    document.body.append(ul);
    document.body.append(button);
}
