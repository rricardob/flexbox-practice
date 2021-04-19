import hamburgerMenu from './menu_hamburguesa.js';
document.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
});

// render categories
// async function getCategories() {
//   let div = document.getElementById('produce-section2__categories');
//   const response = await fetch(
//     'localhost:8090/api/producto/getCategoryProducts',
//   );
//   let data = await response.json();
//   let items = '';
//   data.forEach(r => {
//     items += `<div class="section-body-left-block">
//     <div class="img-post">
//       <img
//         src="${r.imagen_post}"
//         alt=""
//       />
//       <figcaption>${r.nombre_categoriaPost}</figcaption>
//     </div>
//     <h2 class="section-body-left-block-title">${r.titulo_post}</h2>
//     <p class="section-body-left-block-subtitle">
//     ${moment(r.fechareg_post).format('DD/MM/YYYY')} Por <span>${
//       r.usuario
//     }</span>
//     </p>
//     <p class="section-body-left-block-description">
//       ${r.descripcion_post}
//     </p>
//     <button class="read-more" data-id="${r.id_post}" onclick="openDetailBlog(${
//       r.id_post
//     })" >Leer más</button>
//   </div>`;
//     //console.log("data -> ", r);
//   });

//   div.innerHTML = items;
// }

// FIN render categories
