fetch('https://dummyjson.com/products')
    .then(res => res.json()) // Аргумент, представляющий ответ от сервера и преобразовывает в JS-объект
    .then(data => { // Переменная, представляющая результат res.json()
        let container = document.getElementById('container');
        data.products.forEach(function(product) {
            container.innerHTML += `
                <div class="product">
                    <img src="${product.images[0]}">
                    <h3>${product.title}</h3>
                    <h3>Цена: $${product.price}</h3>
                    <h3>Категория: ${product.category}</h3>
                </div>`;
        });
    });

function searchProducts() {
    let searchWord = document.getElementById('searchInput').value;
    let searchContainer = document.getElementById('searchContainer');
    searchContainer.innerHTML = ''; // Очистить контейнер перед новым поиском

    fetch(`https://dummyjson.com/products/search?q=${searchWord}`)
    .then(res => res.json())
    .then(data => {
        data.products.forEach(function(product) {
            searchContainer.innerHTML += `
                <div class="product">
                    <img src="${product.images[0]}">
                    <h3>${product.title}</h3>
                    <h3>Цена: $${product.price}</h3>
                    <h3>Категория: ${product.category}</h3>
                </div>`;
        });
    });
}
