window.addEventListener('load', () => {
  //Id card-category
  let cardCategory = document.getElementById('produce-section2__categories');

  //Define Fetch
  fetch('http://localhost:8090/api/producto/getCategoryProducts')
    //Define Json
    .then(response => response.json())

    //Excute Json
    .then(data => {
      //Define For
      for (const rows of data) {
        cardCategory.innerHTML += `
          <div class="produce-section2__category">
            <img
                id="img-category"
                class="img-category"
                src="${rows.imagen_categoria}"
                alt="img-category"
            />
            <h2 class="produce-section2__categories-title">${rows.nombre_categoria}</h2>
            <a
                class="button button--section2-categories"
                href="hortalizas.html"
            >Ver más
            </a>
          </div>`;
      }
    });
});
