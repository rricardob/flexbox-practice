// self executing function here
(function () {
  // your page initialization code here
  // the DOM will be available here
  //inputCommentSelected();
  getPosts();
  getCategorys();
})();

/*
 * funcion que selecciona el div padre que contiene el input al hacer clic
 */
function inputCommentSelected() {
  let input = document.getElementById("input");
  let button = document.getElementById("button");

  input.onfocus = () => {
    document
      .getElementById("input")
      .parentElement.classList.add("container-input--selected");
  };

  button.onclick = () => {
    document
      .getElementById("input")
      .parentElement.classList.remove("container-input--selected");
  };
}

async function getPosts() {
  let div = document.getElementById("container-data-post");
  const response = await fetch("http://localhost:8090/api/post/getPosts");
  let data = await response.json();
  let items = "";
  data.forEach((r) => {
    items += `<div class="section-body-left-block">
    <div class="img-post">
      <img
        src="${r.imagen_post}"
        alt=""
      />
      <figcaption>${r.nombre_categoriaPost}</figcaption>
    </div>
    <h2 class="section-body-left-block-title">${r.titulo_post}</h2>
    <p class="section-body-left-block-subtitle">
    ${moment(r.fechareg_post).format("DD/MM/YYYY")} Por <span>${
      r.usuario
    }</span>
    </p>
    <p class="section-body-left-block-description">
      ${r.descripcion_post}
    </p>
    <button class="read-more" data-id="${
      r.id_post
    }" onclick="openDetailBlog(${r.id_post})" >Leer más</button>
  </div>`;
    //console.log("data -> ", r);
  });

  div.innerHTML = items;
}

async function getCategorys() {
  let div = document.getElementById("container-data-category");
  const response = await fetch("http://localhost:8090/api/post/getCategory");
  let data = await response.json();
  let items = "";
  data.forEach((r) => {
    items += `<li>
    ${r.nombre_categoriaPost} &nbsp;&nbsp;&nbsp;&nbsp; ${r.cantidadpost_categoriaPost}
  </li>`;
  });
  div.innerHTML = items;
}

let openDetailBlog = id => {
  /*const btn = document.getElementsBy("read-more");
  btn.addEventListener("click", function (e) {
    var dataSet = this.dataset;
    console.log(dataSet);
  });*/
  window.open(`blog_detail.html?id=${id}`)
  console.log(id)
};
