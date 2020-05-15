function api() {
    // Carrusel

    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta")

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
            element.innerHTML = `<img src="${jsondata.data[0].image.url}"/>`
            element2.innerHTML = `<img src="${jsondata.data[1].image.url}"/>`
            element3.innerHTML = `<img src="${jsondata.data[2].image.url}"/>`
            element4.innerHTML = `<img src="${jsondata.data[3].image.url}"/>`
            element5.innerHTML = `<img src="${jsondata.data[4].image.url}"/>`
            element6.innerHTML = `<img src="${jsondata.data[5].image.url}"/>`
                // document.getElementById("img1").innerHTML = '<img src="' + api.data[0].image.url + '" alt="/>';
            console.log(jsondata.data[0].author.name);
        })

    // Fin Carrusel
    // Fetch 3 CARDS ********************/
    var content2 = document.getElementById('uno');
    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,taxonomy.name,preference.name,title,image,url,category.name&sort=visits:DESC&type=receta&limit=3")
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
                            <h5>THE BEST</h3>
                            <h3>${receta.taxonomy.name}<br/> ${receta.category.name} </h5>                           
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
            array_rece.forEach(function(receta) { // Para cada elemento en la matriz, construí mi tarjeta.
                // concatenates current card to html variable.
                html += `
                <div class="imagen ">
                        <img src="${receta.image.url}" alt=" ">
                </div>
                    <div class="texto-entrada ">
                        <h4>${receta.taxonomy.name}</h4>
                        <h2>${receta.title}</h2>
                        <time datetime="2020-02-25 09:04 ">March 3,2020 / ${receta.author.name}</time>
                        <p>
                        ${receta.summary} 
                       
                        </p>
                        <div class="card-horizontal-button ">
                            <a href="# "><button>Read More</button></a>
                        </div>
                     </div>
                `;
            });
            return html; // devuelve todo el HTML creado, este contiene en este momento TODAS mis tarjetas.
        })
        .then(function(html) { // recibir html e inyectar en mi div
            content5.innerHTML = html;
        })

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
                        <time datetime="2020-02-25 09:04 ">March 3,2020 / ${receta.author.name}</time>
                        <p>
                        ${receta.summary}                      
                        </p>
                        <div class="card-horizontal-button ">
                            <a href="#"><button>Read More</button></a>
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
        //  ************** FIN *******************

    // cards Vane

    var content7 = document.getElementById('card4');

    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,summary,taxonomy.name,preference.name,ingredients,author.name,title,image,url,category.name&type=receta&limit=3&offset=8")
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
            <div class="first">
            <img src="${receta.image.url}">
            </div>
                <div class="second-container">
                    <h3>${receta.taxonomy.name}</h3>
                    <h1 class="green">${receta.title}</h1>
                    <time datetime="01-02-2010 ">JULY 11, 2018 / ${receta.author.name}</time>
                    <p class="gray">
                    ${receta.summary}
                    </p>
                </div>
           
            `;
            });
            return html; // devuelve todo el HTML creado, este contiene en este momento TODAS mis tarjetas.
        })
        .then(function(html) { // recibir html e inyectar en mi div
            content7.innerHTML = html;
        })

    // Sgunda seccion card's pequeñas
    var content8 = document.getElementById('card5');

    fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,image.styles.square_circle,taxonomy.name,author.name,title,category.name&sort=visits:DESC&type=receta&limit=5")
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
                <div class="two-columns">
                <div class="one">
                   <img  src="${receta.image.styles.square_circle}"/>
                </div>
                <div class="two">
                    <h5>${receta.title}</h5>
                    <time datetime="02-13-2020 ">JULY 11,2018 / ${receta.author.name}</time>
                </div>
            </div>
           
            `;
            });
            return html; // devuelve todo el HTML creado, este contiene en este momento TODAS mis tarjetas.
        })
        .then(function(html) { // recibir html e inyectar en mi div
            content8.innerHTML = html;
        })

    // ****FIN ****

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

    // FIN

}
// ********** FIN de funcion *****************

//  ********** Recorrer el arreglo del API *********************
function convertObject(json_result) {
    var rece = []; // inicializar matriz vacía
    for (var name_rece in json_result) { // itera en cada elemento.
        var valores = json_result[name_rece]; // rellena la variable de la receta, ejemplo json_result ["Amumu"]
        rece.push(valores); // push valores to array 
    }

    return rece; // Matriz de retorno con todos los campos.
}
export { api };