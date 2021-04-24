// self executing function here
(function () {
  // your page initialization code here
  // the DOM will be available here
  getProductsByCategory();
})();

function getParamFromUrl(key) {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  return urlParams.get(key);
}

async function getProductsByCategory() {
  const id = getParamFromUrl('id');
  let div = document.getElementById('vegetables-card-container');
  const response = await fetch(
    `http://localhost:8090/api/producto/getProductsByCategory/${id}`,
  );
  let data = await response.json();
  let items = '';
  data.forEach(r => {
    items += ` <div class="vegetables-card">
            <div class="vegetables-card__container-image">
              <img
                class="vegetables-card__image"
                src="${r.imagenProducto}"
                alt=""
              />
            </div>
            <div class="vegetables-card1__text">
              <a class="button button--vegetables-card" id="open">comprar</a>
              <h2 class="vegetables-card__title">${r.nombre_producto}</h2>
              <p class="vegetables-card__content">${r.detalle_producto}</p>
            </div>
            <div class="vegetables-card__buy-container">
              <div class="vegetables-card__buy">
                <i
                  class="fas fa-hand-holding-usd vegetables-card__buy1-icon"
                ></i>
                <div class="vegetables-card__buy1-price">${r.precio_producto}</div>
              </div>
              <div class="vegetables-card__buy2">
                <i class="fas fa-truck vegetables-card__buy2-icon"></i>
                <div class="vegetables-card__buy2-delivery">Delivery</div>
              </div>
              <div class="vegetables-card__buy3">
                <i class="far fa-heart vegetables-card__buy3-icon"></i>
                <div class="vegetables-card__buy3-like">Me gusta</div>
              </div>
            </div>
          </div>
 `;
  });

  div.innerHTML = items;
  // getUserPost();
}

/*

async function getProductsByCategory() {
  let cardByCategoryContainer = document.getElementById(
    'vegetables-card-container',
  );
  const response = await fetch(
    'http://localhost:8090/api/producto/getCategoryProducts',
  );
  let data = await response.json();
  let items = '';
  data.forEach(r => {
    cardCategory.innerHTML += `
          <div class="produce-section2__category">
            <img
                id="img-category"
                class="img-category"
                src="${r.imagen_categoria}"
                alt="img-category"
            />
            <h2 class="produce-section2__categories-title">${r.nombre_categoria}</h2>
            <a
                class="button button--section2-categories"
                href="productos_por_categoria.html"
            >Ver más
            </a>
          </div>`;
  });
}
*/
