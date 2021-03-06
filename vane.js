//CARDS LEFT
fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=title,summary,author.name,image.url,created,taxonomy.name&type=receta&limit=3&offset=8')
    .then(response => response.json())
    .then(object => {
        array = object.data;
        let left = document.getElementById('left');
        for (let i = 0; i < array.length; i++) {
            let time = array[i].created;
            date = new Date(time * 1000);
            dateString = date.toLocaleDateString();
            left.innerHTML += `
        <div class="two-columns">
          <div class="first" id="image">
            <img src="${array[i].image.url}"/>
          </div>
            <div class="second-container" id="no">
              <p>${array[i].taxonomy.name}</p>
              <a href="recipe_detail.html"><span class="green">${array[i].title}</span></a>
              <time>${dateString} ${array[i].author.name}</time>
              <p class="gray">${array[i].summary}</p>
            </div>
        </div>
        `;
        };
    })
    .catch(error => console.log('Hay un error'))

//CARDS RIGHT
fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=title,created,author.name,image.url&type=receta&limit=5&offset=11')
    .then(response => response.json())
    .then(object => {
        array = object.data;
        let right = document.getElementById('right');
        for (let i = 0; i < array.length; i++) {
            let time = array[i].created;
            date = new Date(time * 1000);
            dateString = date.toLocaleDateString();
            right.innerHTML += `
        <div class="two-columns">
          <div class="one" id="yes">
          <img src="${array[i].image.url}"/>
          </div>
          <div class="two" id="content">
          <a href="recipe_detail.html"><p class="green">${array[i].title}</p></a>
          <time>${dateString} ${array[i].author.name}</time>
          </div>
        </div>
        `;
        };
    })
    .catch(error => console.log('Hay un error'))