window.addEventListener('load', () => {

  //Id Body_Card 
  let body_card = document.getElementById('body_card');


  //Define Fetch
  fetch('http://localhost:8090/api/proveedor') 
  

    //Define Json 
    .then((response) => response.json())


    //Excute Json
    .then((data) => {
      
      
      //Define For 
      for (rows of data) {
        
        body_card.innerHTML+=
        
          `
            <div class="card">
            
            <img src="${rows.logo_proveedor}" class="card__img" alt="" />
            <div class="card__content" id="body_card">
            
            
            <h2 class="card__title">${rows.nombre_proveedor}</h2>
            <p class="card__text">
                ${rows.razonsoc_proveedor}
            </p>
            <a class="card__button" button href="${rows.web_proveedor}">More</a>

            </div>
            <div class="card__layer-1"></div>
            <div class="card__layer-2"></div>
            <div class="card__layer-3"></div>
            <div class="card__layer-4"></div>

            </div>
            `
      }

    });

});
