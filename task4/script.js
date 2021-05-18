const prompt2 = document.querySelector('a');

prompt2.addEventListener('click', () => {
    prompt('Введите текст');
    prompt2.textContent = 'текст';
})

// как изменить текст в ссылке?