import throttle from 'lodash.throttle';

const vaultKey = 'feedback-form-state';
let formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input'),
};

populateTextarea();

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(vaultKey)));
    e.currentTarget.reset();
    localStorage.removeItem(vaultKey);
    formData = {};
}

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(vaultKey, JSON.stringify(formData));
}

function populateTextarea() {
    const savadMessage = localStorage.getItem(vaultKey);
    if (savadMessage) {
        console.log(savadMessage);
        const formKeys = JSON.parse(savadMessage);
        if (formKeys.email !== undefined) refs.input.value = formKeys.email;
        if (formKeys.message !== undefined) refs.textarea.value = formKeys.message;
    }   
}