const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('modal');
const loginForm = document.getElementById('loginForm');
const labelName = document.getElementById('labelName');
const showPassword = document.getElementById('button-show-password');
const passwordInput = document.getElementById('show-password-input')

labelName.addEventListener('click', () => {
    loginForm.elements.login.focus()
    loginForm.elements.password.addEventListener('focus', () => {
        console.log(
            'Мы сфокусировались на пароле')
    }
    )

})

const persons =
    [
        { name: 'Иван', password: 'ivan123' },
        { name: 'Ярослав', password: 'yar123' },
        { name: 'Виктор', password: 'vik123' },
    ]


openModalButton.addEventListener('click', function () {
    modal.style.display = 'block'
});

closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none'
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = this.querySelector('[name="login"]').value
    const password = this.querySelector('[name="password"]').value
    const user = persons.find(person => person.name === login);



    console.log(user)

    if (!user) {
        alert('Не удалось найти пользователя')
        this.reset(); //сброс-закрытие модального окна
    }
    else if (user.password === password) {
        alert(`Добро пожаловать, ${user.name}!`)
        modal.style.display = 'none'
        this.reset();

    }
    else {
        alert('Пароль неверный!')
        this.querySelector('[name="password"]').value = ''

    }

});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none'
    }

    // const validation = /[!@^*&]/g //регулярка - проверка на нежелательные знаки
    // const isWrongValidation = event.key.match(validation)
    // // if (isWrongValidation){
    // //     loginForm.elements.password.value = 

    // // }

    // console.log(loginForm.elements.password.value = loginForm.elements.password.value.slice(0,-1))
});
loginForm.elements.password.addEventListener('input', function () {
    // console.log(123)
    const field = this
    const errorMessage = document.getElementById('password-error')
    console.log(errorMessage)
    console.log(field)
    const regex = /^[a-zA-Z0-9]*$/; //разрешить английские буквы и цифры, регулярки генерятся ИИ
    // console.log('test', !regex.test(field.value))
    if (!regex.test(field.value)) {
        console.log('Строка до среза', field.value);
        errorMessage.textContent = 'Ой, тут ошибочка, недопустимый символ!';
        field.value = field.value.slice(0, -1);
        field.classList.add('errorField')
        // field.blur()   // pacфокусировка
        console.log('Строка после среза', field.value)
    } else {
        errorMessage.textContent = ''
        field.classList.remove('errorField')
    }

});

showPassword.addEventListener('click', function () {
    console.log('click');
    const btn = this
    const passwordField = loginForm.elements.password

    switch (btn.value) {
        case 'Показать пароль': {
            btn.value = 'Скрыть пароль'
            passwordField.type = 'text'
            break
        }
        case 'Скрыть пароль': {
            btn.value = 'Показать пароль'
            passwordField.type = 'password'
        }
    }


});


const openRegModalButton = document.getElementById('openRegModalButton');
const closeRegModalButton = document.getElementById('closeRegModalButton');
const modalReg = document.getElementById('modalReg');
const loginRegForm = document.getElementById('loginRegForm');
const labelRegName = document.getElementById('labelRegName');
const showRegPassword = document.getElementById('button-reg-show-password');
const passwordRegInput = document.getElementById('show-reg-password-input')

labelRegName.addEventListener('click', () => {
    loginRegForm.elements.loginReg.focus()
    loginRegForm.elements.passwordReg.addEventListener('focus', () => {
        console.log(
            'Мы сфокусировались на пароле')
    }
    )
})

// const persons =
//     [
//         { name: 'Иван', password: 'ivan123' },
//         { name: 'Ярослав', password: 'yar123' },
//         { name: 'Виктор', password: 'vik123' },
//     ]


openRegModalButton.addEventListener('click', function () {
    modalReg.style.display = 'block'
});

closeRegModalButton.addEventListener('click', function () {
    modalReg.style.display = 'none'
});

// loginForm.elements.login.addEventListener('input', () => {

//     const login = document.getElementById('login')             //для вывода в консоль с новым пользователем
//     persons.push({ name: login, password: password })
//     console.log(persons)
// });


loginRegForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = this.querySelector('[name="loginReg"]').value
    const password = this.querySelector('[name="passwordReg"]').value
    const confirmPassword = this.querySelector('[name="confirmPassword"]').value
  
    const user = persons.find(person => person.name === login);

    if (user) {
        alert("Пользователь с таким логином уже существует!");
        return;
    }
    if (password === confirmPassword) {
    persons.push({ name: login, password: password });

        alert('Пароли совпадают, регистрация успешна!')
        this.reset(); //сброс-закрытие модального окна
    console.log(persons)

    }

    else {
        alert('Пароли не совпадают, проверьте!')
        this.querySelector('[name="password"]').value = ''

    }
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none'
    }

});


loginRegForm.elements.passwordReg.addEventListener('input', function () {
    // console.log(123)
    const field = this
    const errorMessage = document.getElementById('password-reg-error')
    console.log(errorMessage)
    console.log(field)
    const regex = /^[a-zA-Z0-9]*$/; //разрешить английские буквы и цифры, регулярки генерятся ИИ
    // console.log('test', !regex.test(field.value))
   

    if (!regex.test(field.value)) {
        // console.log('Строка до среза', field.value);
        errorMessage.textContent = 'Ой, тут ошибочка, недопустимый символ!';
        field.value = field.value.slice(0, -1);
        field.classList.add('errorField')
        // field.blur()   // pacфокусировка
        // console.log('Строка после среза', field.value)
    } else {
        errorMessage.textContent = ''
        field.classList.remove('errorField')
    }

});

showRegPassword.addEventListener('click', function () {
    console.log('click');
    const btn = this
    const passwordField = loginRegForm.elements.passwordReg

    switch (btn.value) {
        case 'Показать пароль': {
            btn.value = 'Скрыть пароль'
            passwordField.type = 'text'
            break
        }
        case 'Скрыть пароль': {
            btn.value = 'Показать пароль'
            passwordField.type = 'password'
        }
    }


});







