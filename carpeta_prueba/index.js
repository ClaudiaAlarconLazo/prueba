const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

//Configuración del servidor
app.listen(8080, () => {
  console.log('Servidor habilitado')
})


//Middlewares
app.use(express.json());
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/views/js'));
app.engine(
  'handlebars',
  expressHandlebars({
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/main_layout`,
  })
);
app.set('view engine', 'handlebars');