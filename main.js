function api() {
    // Carrusel
    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta&fields=id,taxonomy.name,created,author.name,image.url,preference.name,title,url,category.name")

    .then(function(response) {
            return response.json()
        })
        .then(jsondata => {
            let element = document.getElementById('img1')
            let element2 = document.getElementById('img2')
            let element3 = document.getElementById('img3')
            let element4 = document.getElementById('img4')
            let element5 = document.getElementById('img5')
            let element6 = document.getElementById('img6')
            let time = 0;
            date = new Date(time * 1000);
            dateString = date.toLocaleDateString();
            element.innerHTML = `
           <div class="main-container-card ">
            <img src="${jsondata.data[0].image.url}"/>
            <div class="main-container-images-fondo-carr ">
                        <div class="main-container-images-marco-carr ">
                        <a href="#">
                            <h5>${jsondata.data[0].taxonomy.name}</h5>
                            <h3>${jsondata.data[0].title}</h3>   
                            <h4>${dateString} ${jsondata.data[0].author.name}</h4>                        
                        </a>
                        </div>
                </div> 
           </div>
            `
            element2.innerHTML = `
            <div class="main-container-card ">
             <img src="${jsondata.data[1].image.url}"/>
             <div class="main-container-images-fondo-carr ">
                         <div class="main-container-images-marco-carr ">
                         <a href="#">
                             <h5>${jsondata.data[1].taxonomy.name}</h5>
                             <h3>${jsondata.data[1].title}</h3>   
                             <h4>${dateString} ${jsondata.data[1].author.name}</h4>                        
                         </a>
                         </div>
                 </div> 
            </div>
             `
            element3.innerHTML = `
            <div class="main-container-card ">
             <img src="${jsondata.data[2].image.url}"/>
             <div class="main-container-images-fondo-carr ">
                         <div class="main-container-images-marco-carr ">
                         <a href="#">
                             <h5>${jsondata.data[2].taxonomy.name}</h5>
                             <h3>${jsondata.data[2].title}</h3>  
                             <h4>${dateString} ${jsondata.data[2].author.name}</h4>                         
                         </a>
                         </div>
                 </div> 
            </div>
             `
            element4.innerHTML = `
            <div class="main-container-card ">
             <img src="${jsondata.data[3].image.url}"/>
             <div class="main-container-images-fondo-carr ">
                         <div class="main-container-images-marco-carr ">
                         <a href="#">
                             <h5>${jsondata.data[3].taxonomy.name}</h5>
                             <h3>${jsondata.data[3].title}</h3>   
                             <h4>${dateString} ${jsondata.data[3].author.name}</h4>                        
                         </a>
                         </div>
                 </div> 
            </div>
             `
            element5.innerHTML = `
            <div class="main-container-card ">
             <img src="${jsondata.data[4].image.url}"/>
             <div class="main-container-images-fondo-carr ">
                         <div class="main-container-images-marco-carr ">
                         <a href="#">
                             <h5>${jsondata.data[4].taxonomy.name}</h5>
                             <h3>${jsondata.data[4].title}</h3>       
                             <h4>${dateString} ${jsondata.data[4].author.name}</h4>                    
                         </a>
                         </div>
                 </div> 
            </div>
             `
            element6.innerHTML = `
            <div class="main-container-card ">
             <img src="${jsondata.data[5].image.url}"/>
             <div class="main-container-images-fondo-carr ">
                         <div class="main-container-images-marco-carr ">
                         <a href="#">
                             <h5>${jsondata.data[5].taxonomy.name}</h5>
                             <h3>${jsondata.data[5].title}</h3> 
                             <h4>${dateString} ${jsondata.data[5].author.name}</h4>                          
                         </a>
                         </div>
                 </div> 
            </div>
             `
            $(document).ready(function() {
                $('.slider-carrusel').slick({
                    // centerPadding: '6px',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    prevArrow: '<button class="slick-prev" arial-label="Previous" style="width:7rem"  type="button">Prev</button>',
                    nextArrow: '<button class="slick-next" arial-label="Next" style="width:7rem" type="button">Next</button>',
                    responsive: [{
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '4px',
                                slidesToShow: 3,
                                prevArrow: '<button class="slick-prev" arial-label="Previous" style="width:7rem"  type="button">Prev</button>',
                                nextArrow: '<button class="slick-next" arial-label="Next" style="width:7rem" type="button">Next</button>',
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '5px',
                                slidesToShow: 1,
                                prevArrow: '<button class="slick-prev" arial-label="Previous" style="width:7rem"  type="button">Prev</button>',
                                nextArrow: '<button class="slick-next" arial-label="Next" style="width:7rem" type="button">Next</button>',
                            }
                        }
                    ]
                });
            });
        })
        .catch(error => console.log('Hay un error'))

    // Fin Carrusel
    // Fetch 3 CARDS ********************/
    var content2 = document.getElementById('uno');
    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,taxonomy.name,image.url,preference.name,title,url,category.name&sort=visits:DESC&type=receta&limit=3")
        .then(function(response) { // Primera promesa, convierte la respuesta a json, devuelve json.
            return response.json()
        })
        .then(function(json) { // recibir json como variable "json"
            return convertObject(json.data); //Decidí convertir primero el objeto en matriz. Ver función a continuación.
        })
        .then(function(array_rece) {
            var html = ""; // inicializa la variable html como una cadena vacía.
            array_rece.forEach(function(receta) { // Para cada elemento en la matriz, construí mi tarjeta.
                // concatenates current card to html variable.
                html += `
            <div class="main-container-images ">
                <img src='${receta.image.url}'/>
                    <div class="main-container-images-fondo ">
                        <div class="main-container-images-marco ">
                        <a href="#">
                            <h5>${receta.taxonomy.name}</h3>
                            <h3>${receta.title}</h5>                           
                        </a>
                        </div>
                    </div>            
            </div>    
        `;
            });
            return html; // devuelve todo el HTML creado, este contiene en este momento TODAS mis tarjetas.
        })
        .then(function(html) { // recibir html e inyectar en mi div
            content2.innerHTML = html;
        })
        .catch(error => console.log('Hay un error'))

    // ************ Fetch Dos Cards *************
    var content5 = document.getElementById('card2');
    var content6 = document.getElementById('card3');

    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,summary,taxonomy.name,preference.name,ingredients,author.name,title,image,url,category.name&type=receta&limit=1&offset=6")
        .then(function(response) { // Primera promesa, convierte la respuesta a json, devuelve json.
            return response.json()
        })
        .then(function(json) { // recibir json como variable "json"
            return convertObject(json.data); //Decidí convertir primero el objeto en matriz. Ver función a continuación.
        })
        .then(function(array_rece) {
            var html = ""; // inicializa la variable html como una cadena vacía.
            let time = 0;
            date = new Date(time * 1000);
            dateString = date.toLocaleDateString();
            array_rece.forEach(function(receta) { // Para cada elemento en la matriz, construí mi tarjeta.
                // concatenates current card to html variable.
                html += `
                <div class="imagen ">
                        <img src="${receta.image.url}" alt=" ">
                </div>
                    <div class="texto-entrada ">
                        <h4>${receta.taxonomy.name}</h4>
                        <h2>${receta.title}</h2>
                        <time class="time" datetime="2020-02-25 09:04 ">${dateString} / ${receta.author.name}</time>
                        <p>
                        ${receta.summary} 
                       
                        </p>
                        <div class="card-horizontal-button">
                            <button>
                                <a href="#">
                                Read More
                                </a>
                            </button>                          
                        </div>
                     </div>
                `;
            });
            return html; // devuelve todo el HTML creado, este contiene en este momento TODAS mis tarjetas.
        })
        .then(function(html) { // recibir html e inyectar en mi div
            content5.innerHTML = html;
        })
        .catch(error => console.log('Hay un error'))

    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,taxonomy.name,preference.name,summary,author.name,title,image,url,category.name&type=receta&limit=1&offset=7")
        .then(function(response) { // Primera promesa, convierte la respuesta a json, devuelve json.
            return response.json()
        })
        .then(function(json) { // recibir json como variable "json"
            return convertObject(json.data); //Decidí convertir primero el objeto en matriz. Ver función a continuación.
        })
        .then(function(array_rece) {
            var html = ""; // inicializa la variable html como una cadena vacía.
            array_rece.forEach(function(receta) { // Para cada elemento en la matriz, construí mi tarjeta.
                // concatenates current card to html variable.
                html += `
              

                    <div class="texto-entrada">
                        <h4>${receta.taxonomy.name}</h4>
                        <h2>${receta.title}</h2>
                        <time class="time"  datetime="2020-02-25 09:04 ">${dateString} / ${receta.author.name}</time>
                        <p>
                        ${receta.summary}                      
                        </p>
                            <div class="card-horizontal-button ">
                                <button>
                                <a href="#">
                                    Read More
                                </a>
                                </button>                          
                            </div>
                    </div>
                        <div class="imagen ">
                            <img src="${receta.image.url}" alt=" ">
                        </div>
                
`;
            });
            return html; // devuelve todo el HTML creado, este contiene en este momento TODAS mis tarjetas.
        })
        .then(function(html) { // recibir html e inyectar en mi div
            content6.innerHTML = html;
        })
        .catch(error => console.log('Hay un error'))
        //  ************** FIN *******************



    // ********* API seccion final *******************

    var content9 = document.getElementById('card6');

    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,image.styles.square_circle&sort=visits:DESC&type=receta&limit=10")
        .then(function(response) { // Primera promesa, convierte la respuesta a json, devuelve json.
            return response.json()
        })
        .then(function(json) { // recibir json como variable "json"
            return convertObject(json.data); //Decidí convertir primero el objeto en matriz. Ver función a continuación.
        })
        .then(function(array_rece) {
            var html = ""; // inicializa la variable html como una cadena vacía.
            array_rece.forEach(function(receta) { // Para cada elemento en la matriz, construí mi tarjeta.
                // concatenates current card to html variable.
                html += `
                    <div class="imagenes">
                        <img src="${receta.image.styles.square_circle}" alt="">
                    </div>   
                 `;
            });
            return html; // devuelve todo el HTML creado, este contiene en este momento TODAS mis tarjetas.
        })
        .then(function(html) { // recibir html e inyectar en mi div
            content9.innerHTML = html;
        })
        .catch(error => console.log('Hay un error'))

    // FIN

}
// ********** FIN de funcion *****************

//  ********** Recorrer el arreglo del API *********************
function convertObject(json_result) {
    var rece = []; // inicializar matriz vacía
    for (var name_rece in json_result) { // itera en cada elemento.
        var valores = json_result[name_rece]; // rellena la variable de la receta, ejemplo json_result
        rece.push(valores); // push valores to array 
    }

    return rece; // Matriz de retorno con todos los campos.
}



export { api };