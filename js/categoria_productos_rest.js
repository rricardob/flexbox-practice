// self executing function here
(function () {
  // your page initialization code here
  // the DOM will be available here
  getCategoryProducts();
})();

async function getCategoryProducts() {
  let cardCategory = document.getElementById('produce-section2__categories');
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
                href="productos_por_categoria.html?id=${r.id_categoria}"
                
            >Ver más
            </a>
          </div>`;
  });
}
