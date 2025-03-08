const searchField = document.getElementById('search-field');
const insertField = document.getElementById('insert-field');
const searchButton = document.getElementById('search-button');
const insertButton = document.getElementById('insert-button');
const resultDiv = document.getElementById('result');

searchButton.addEventListener('click', () => {
    fetch('/search?find=' + encodeURIComponent(searchField.value))
    .then(res => res.text())
    .then(txt => {
        resultDiv.innerText = txt;
    })
    .catch(err => {
        resultDiv.innerText = 'Search error: ' + err;
    });
});

insertButton.addEventListener('click', () => {
    fetch('/insert?doc=' + encodeURIComponent(insertField.value))
    .then(res => res.text())
    .then(txt => {
        resultDiv.innerText = txt;
    })
    .catch(err => {
        resultDiv.innerText = 'Insert error: ' + err;
    });
});
