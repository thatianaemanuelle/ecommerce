function renderIndex() {
  return `
  <div class='container-index'>
  <div class = "img-index" style = "background-image: url(./dist/img/bg-materiais-1.jpg);">
  <div class="container h-100">
  <div class="row h-100 align-items-center">
    <div class="col-12">
      <div class="hero-content">
          <a href="/products" class=" mt-5 btn btn-outline-danger btn-index"> Bora construir! </a>
        </ div>
      </ div>
    </ div>
  </ div>
</ div>
</div>
`
}

function renderProductsList(products) {
  var docs = products.results;
  return `
  <div class="area-item"> ${docs.map(docs =>
      `<div class="item">
        <h3 id = 'title' class="demo">${docs.title}<h3>

         <img src="${docs.thumbnail}" "width="200" height="100" > 
         <p class="demo font-weight-bold" > R$ ${docs.price}</p>
         <div id="teste">
          
         <button type="button" id= "btn" class="btn btn-color btn-sm demo produto1" onclick="addShopping(['${docs.title}' , '${docs.thumbnail}', '${docs.price}', '${docs.id}', '${docs.attributes[0].value_name}'],)"> Adiconar ao carrinho </button>  
         
                    </div>
                    </div>
                    `).join("")}
                    </div>    
                    `
}

function renderShopping() {
  return `
    <h2 class="mt-0 title-card mt-5 ml-5"> Carrinho de compras</h2>
    <h2 class="mt-0 title-card ml-5">produtos adicionados </h2>
    <div class=" item-card media">
    <img id="img" src="productImg" "width="90" height="90">  
    <div class="media-body">
    
      <p id="produto" > </p>
      <p id="price" class="mb-0 font-weight-bold">   </p>
      <div class ="d-flex justify-content-end">
      <button class= " btn btn-color btn-sm"onClick="removeItem()" class ="demo" id'remove'> Remover Item </button>
      </div >
      <p class="mb-0"> </p>
    </div>
  </div>
    `
}

function addShopping(produto) {

  productInf = produto;
  console.log(productInf)

  productTitle = productInf[0]
  console.log(productTitle)
  productImg = productInf[1]
  console.log(productImg)
  productPrice = productInf[2]
  console.log(productPrice)

  localStorage.setItem('title', productTitle);
  localStorage.setItem('img', productImg);
  localStorage.setItem('price', productPrice);
}

function removeItem() {
  alert('Removido!');
  localStorage.removeItem('title');
  localStorage.removeItem('price');
  localStorage.removeItem('img');
}