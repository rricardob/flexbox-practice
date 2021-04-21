// self executing function here
(function () {
  // your page initialization code here
  // the DOM will be available here
  //inputCommentSelected();
  getPosts();
  getCategorys();
  getUserPostData();
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
    <button class="read-more" data-id="${r.id_post}" onclick="openDetailBlog(${
      r.id_post
    })" >Leer más</button>
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

async function getUserPostData() {
  let div = document.getElementById("section-body-right-user");
  const response = await fetch(`http://localhost:8090/api/usuario/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cod_usuario: "rbueno", password_usuario: "123" }),
  });
  let data = await response.json();
  //console.log(data);
  let items = "";

  data.forEach((r) => {
    items += `<div class="section-body-right-card card-user">
    <h1>Sobre Mí</h1>
    <img
      src="${r.img_usuario}"
      alt=""
    />
    <p>
      ${r.descripcion}
    </p>
  </div>`;
  });
  div.innerHTML = items;

};

let openDetailBlog = (id) => {
  window.open(`blog_detail.html?id=${id}`);
  console.log(id);
};

async function getLatestPost(){
  
}
