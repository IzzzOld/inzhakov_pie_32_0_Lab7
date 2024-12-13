fetch('https://dummyjson.com/products')
    .then(res => res.json()) // Аргумент, представляющий ответ от сервера и преобразовывает в JS-объект
    .then(data => { // Переменная, представляющая результат res.json()
        let container = document.getElementById('container');
        data.products.forEach(product => {
            container.innerHTML += `
                <div class="product">
                    <img src="${product.images[0]}">
                    <h3>${product.title}</h3>
                    <h3>Цена: $${product.price}</h3>
                    <h3>Категория: ${product.category}</h3>
                </div>`;
        });
    });

fetch('https://dummyjson.com/products/search?q=apple')
.then(res => res.json())
.then(data => {
    let searchContainer = document.getElementById('searchСontainer');
    data.products.forEach(product => {
        searchContainer.innerHTML += `
            <div class="product">
                <img src="${product.images[0]}">
                <h3>${product.title}</h3>
                <h3>Цена: $${product.price}</h3>
                <h3>Категория: ${product.category}</h3>
            </div>`;
    });
});
