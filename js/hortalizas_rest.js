window.onload = () => {
  getProductsByCategory();
};

const getParamFromUrl = key => {
  let url = window.location.search;
  let urlParams = new URLSearchParams(url);
  return urlParams.get(key);
};

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
              <a 
                class="button button--vegetables-card" 
                id="open" 
                onclick="modalPage()" 
                href="#?id=${r.id_categoriaProduc}"
                >
                comprar
                </a>
              
                    
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
          
          
          <!-- ------------- First modal ------------ -->
          <div class="modal-container modal-container1" id="modal_container">
            <div class="modal">
              <h1 class="modal__title">Bolsa de Compras</h1>
              <div class="modal__info-buy">
                <div class="modal__image">
                  <img src="${r.imagenProducto}" alt="" />
                </div>
                <div class="modal_information-buy">
                  <p class="product-name">${r.nombre_producto}</p>
                  <p class="product-code">${r.codigo_producto}</p>
                  <a
                    href="./productos_por_categoria.html"
                    class="delete-product"
                    >Eliminar</a
                  >
                </div>
              </div>

              <div class="modal__cost">
                <div class="modal__total-cost">
                  <div class="modal__price">
                    <div class="modal__content">Precio</div>
                    <div class="modal__price" id="modal__price">2</div>
                  </div>

                  <div class="modal__sub-total">
                    <div class="modal__content">Subtotal</div>
                    <div class="modal__monto" id="modal__montosub"></div>
                  </div>

                  <div class="modal__descuento">
                    <div class="modal__content">Descuento</div>
                    <div
                      class="modal__montoDescuento"
                      id="modal__montoDescuento"
                    >
                      2
                    </div>
                  </div>

                  <div class="modal__total">
                    <div class="modal__content">Total</div>
                    <div class="modal__montoTotal" id="modal__montoTotal">
                      0
                    </div>
                  </div>
                </div>

                <div class="modal__count">
                  <h3 class="modal__count-title">CANTIDAD</h3>
                  <button class="modal__decrease" id="modal-decrease">-</button>
                  <input
                    type="text"
                    name="modal__count-value"
                    class="modal__count-value"
                    readonly
                    value="1"
                  />
                  <button class="modal__increment" id="modal-increment">
                    +
                  </button>
                </div>

                <div class="modal__offered-container">
                  <div class="modal__offered-yes">Disponible</div>
                  <div class="modal__offered-no hide">No Disponible</div>
                </div>
              </div>

              <div class="modal__resume">
                <h3 class="modal__resume-title">Resumen de tu orden</h3>
                <div class="modal__resume-section1">
                  <div class="modal__resume-subtotal">
                    <div class="modal__resume-subtotal-text">
                      Subtotal productos
                    </div>
                    <div
                      class="modal__resume-subtotal-mount"
                      id="modal__resume-subtotal-mount"
                    ></div>
                  </div>

                  <div class="modal__resume-descuento">
                    <div class="modal__resume-descuento-text">Descuento</div>
                    <div
                      class="modal__resume-descuento-total"
                      id="modal__resume-descuento-total"
                    ></div>
                  </div>

                  <div class="modal__resume-total">
                    <div class="modal__resume-total-text">Total a pagar</div>
                    <div
                      class="modal__resume-total-total"
                      id="modal__resume-total-total"
                    ></div>
                  </div>
                </div>
                <div class="modal__resume-section2">
                  <div class="buttons-buy">
                    <button class="button modal__button-comprar" id="">
                      comprar
                    </button>
                    <button class="button modal__button-cerrar btnClose" onclick="closeModal()">
                      cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- --------X----- End First modal ------X-------->
 `;
  });

  div.innerHTML = items;
}
