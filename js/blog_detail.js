(function () {
  //getDetailBlog()
  getDetailBlog();
})();

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

function getParamFromUrl(key) {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  return urlParams.get(key);
}

async function getDetailBlog() {
  let id = getParamFromUrl("id");
  let div = document.getElementById("container-data-detail-post");
  const response = await fetch(
    `http://localhost:8090/api/post/getPostById/${id}`
  );
  let data = await response.json();
  let items = "";
  data.forEach((r) => {
    items += `<section class="section-header">
            <div class="section-header-content">
            <h1 class="section-header-content-title">${r.titulo_post}</h1>
            </div>
            <img src="${r.imagen_post}" alt="farm" />
            </section>
            
            <div class="container">
        <div class="section-info-post">
            <h2 class="section-info-post-subtitle">
                ${r.subtitulo_post}
                <p class="section-info-post-date">${moment(
                  r.fechareg_post
                ).format("DD/MM/YYYY")} | ${r.usuario}</p>
            </h2>
            <p class="section-info-post-content">${r.descripcion_post}</p>
            <p class="section-info-post-content">${r.descripcion_post}</p>
            <img class="section-info-post-content-multimedia"
                src="https://res.cloudinary.com/dancwxbfx/image/upload/v1616822048/post_1.jpg" alt="farm" />
            <p class="section-info-post-content">
                <b><i></b></i> 
                ${r.descripcion_post}
            </p>
        </div>
        <hr />
        <div id="container-data-detail-post-user"></div>            
    </div> `;
  });

  div.innerHTML = items;
  getUserPost();
}

const getUserPost = async () => {
  let div = document.getElementById("container-data-detail-post-user");
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
      <h1>Sobre el Autor de este Post</h1>
      <p>${r.nom_usuario} ${r.ape_usuario}</p>
      <div class="card-user-img">
          <img src="${r.img_usuario}" alt="" />
          <div class="card-user-container-network">
              <div class="container-network">
                  <i class="fas fa-star"></i>
                  <p>Calificacion del post 4,4</p>
              </div>
              <div class="container-network">
                  <i class="far fa-file-alt"></i>
                  <p>Cantidad de Post 50</p>
              </div>
              <div class="container-network">
                  <i class="fas fa-medal"></i>
                  <p>Miembro hace 1 año</p>
              </div>
              <div class="container-network">
                  <i class="fas fa-users"></i>
                  <p>Cantidad de seguidores 10</p>
              </div>
          </div>
      </div>
      <p>
          ${r.descripcion}
      </p>
      </div>
      <h3>Comentarios</h3>
      <hr />
      <div class="section-comment" id="section-comment">
      
      
      </div>`;
  });
  div.innerHTML = items;
  getComentsByPost();
};

const getComentsByPost = async () => {
  let id = getParamFromUrl("id");
  let div = document.getElementById("section-comment");
  const response = await fetch(
    `http://localhost:8090/api/post/getComentsByPost/${id}`
  );
  let data = await response.json();
  let items = "";

  data.forEach((r) => {
    items += `<div class="section-body-right-card card-user">
        <div class="card-user-img">
            <img class="img-comment"
                src="https://res.cloudinary.com/dancwxbfx/image/upload/v1616821238/user_female.jpg" alt="" />
            <div class="card-user-container-network">
                <p class="user-comment">${r.usuario}</p>
                <p class="user-date">${moment(r.fechareg_comentario).format("DD/MM/YYYY hh:mm a")}</p>
                <p class="user-text">${r.descripcion_comentario}</p>
            </div>
        </div>
    </div>
    
    `;
  });

  items += `<div class="section-comment-write-comment">
    <textarea id="input" placeholder="ingrese su comentario"></textarea>
    <div class="container-icon">
        <i class="fas fa-paperclip"></i>
        <i class="fas fa-image"></i>
        <button id="button" class="button-comment" onclick="publishComment()"><i class="fas fa-location-arrow"></i>Post</button>
    </div>
    </div>`;

  div.innerHTML = items;
};

const publishComment = async () => {
  const comment = document.getElementById("input").value;
  //console.log(`${getParamFromUrl("id")}`)
  const response = await fetch(`http://localhost:8090/api/post/publishComment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descripcion_comentario: `${comment}`,
        id_post: `${getParamFromUrl("id")}`,
        id_usuario: "1",
      }),
    }
  );
  let data = await response.json();
  console.log(data)
  getComentsByPost()
};
