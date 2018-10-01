page('/', index);
page('/products', products);
page('/productsTwo', productsTwo);
page();

function index() {
    $("main").html(renderIndex());
}

async function products() {
    const mercadoLivreProducts = await getProducts()
    $("main").html(renderProductsList(mercadoLivreProducts));
}

async function productsTwo() {
    const mercadoLivreProducts = await getProductsTwo()
    $("main").html(renderProductsList(mercadoLivreProducts));
}

function getProducts() {
    return fetch("https://api.mercadolibre.com/sites/MLB/search?category=MLB263532").then((response) => response.json())
        .then((json) => json);
}

function getProductsTwo() {
    return fetch("https://api.mercadolibre.com/sites/MLB/search?category=MLB1499").then((response) => response.json())
        .then((json) => json);
}

// function shopping() {
//     $("main").html(renderShopping());
//     document.getElementById("produto").innerHTML = localStorage.getItem("title");
//     document.getElementById("img").src = localStorage.getItem("img");
//     document.getElementById("price").innerHTML = 'Valor R$ ' + localStorage.getItem("price");

// }

