

// TEST de que funciona   alert("Hola Marvel")

//const md5 = require("js/md5.js");

//laves para el acceso a la API
const privateKey = "f3cd8da61a4e04a5934911f54a900a148dc0aac9",
      publicKey =  "070319a50d29b224b7fff55c1d225937",
      content = document.getElementById('content'),
      //Trayendo la entrada cogida en el teclado
      search =  document.getElementById('search'); // funcion debajo

      //creando metod para usar el FETCH que tarera ls datos
const getConnection= () =>{
const ts = Date.now();

///concatenaer el TimeStamp mas las java scrip
//Y pasrlo como parametro a la funcion MD% que va a contruir el HASH

const hash = md5(ts+privateKey+publicKey),
// esta es la api de marvel
URL =`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`

//haciendo la peticion a  AJAX
//imprime por consola la respuesta del RESPONSE
fetch(URL).then(response => response.json() ). // MUESTRA EN FORMATO json LA respuesta de la API
           then(response => 
                 
            response.data.results.forEach( e => {
                        drawHero(e);            })
           ).catch(e => console.log(e));    // el catch sirve para validar un errror

        }; 

        // Pintara en pantalla la imagen de cada super heroe
const drawHero = e =>{

    const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`
    
const hero= 
`<div class "ed-item l-1-3"> 
<h3>${e.name} </h3>
  <div class = "hero-img">
<img class= "thumbnail" src="${image}">
<p  class = "description"> ${e.description} </p>
   </div>
</div>
      `;

//Esta parte determina en que parte del html se mostrara el contenido JS
content.insertAdjacentHTML('beforeEnd', hero);      

};


const searchHero = name => {

    //formatear la entrada
    hero = encodeURIComponent(name)

    const ts = Date.now();
    const hash = md5(ts+privateKey+publicKey),
     // esta es la api de marvel
    URL =`http://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    
    //haciendo la peticion a  AJAX
    //imprime por consola la respuesta del RESPONSE
    fetch(URL).then(response => response.json() ). // MUESTRA EN FORMATO json LA respuesta de la API
               then(response => 
                     response.data.results.forEach(e=> {drawHero(e)})
                   ).catch(e => console.log(e));    // el catch sirve para validar un errror
    }

search.addEventListener('keyup', e=> {

    if(e.keyCode ===13){
           content.innerHTML = '';    //elimina todo el contenido de la ventana ates de mostrar el hero buscado
           searchHero(e.target.value.trim())
                       }

})

 getConnection();                          



