const express = require("express"); //requiero express

const path = require('path');
const app = express(); // asigno a la variable app, express ejecutada
const PORT = 3000; //declaro una variable que almacenara el nro del puerto

app.use(express.static("public")); //configuración de archivos estaticos


/*====== MIDDLEWARES =======*/
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/*====== CONFIG. TEMPLATE ENGINE =======*/

/*====== REQUIERO ROUTERS =======*/


/*====== ENRUTADORES =======*/

app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto ${PORT}`)
})

/*
COMANDOS PARA INSTALAR DEPENDENCIAS:
npm i ejs //instalo motor de plantilla ejs
== se debe realizar una configuración ==
app.set('view engine', 'ejs');
app.set('views', '/views');

npm i method-override --save //nos permite recibir información por los metodos PUT Y DELETE
== se debe realizar una configuración ==
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
*/
