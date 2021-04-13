//cuando cargue toda la pagina - dispara evento load con todo los bloques de codigo declarados
window.addEventListener('load' , () => {   

    //llamando al body_card 
    let body_card = document.getElementById('body_card');

    //Define Fetch 
    fetch('http://localhost:8090/api/proveedor') //declarando api rest 
    
    /*
        json() -> Recibe un flujo Response y lo lee hasta completarlo. Devuelve una promesa que resuelve como JSON el texto del Body enviado (o peticion enviada)
    */
    .then(response => response.json()) 
    
    //Excute Json 
    .then(data => {

        //probando por consola 
        console.log(data); 
        
        //recorriendo json 
        for(rows of data){ 

            //agregando html
            body_card.innerHTML+=   

            //html 
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
    })

})
