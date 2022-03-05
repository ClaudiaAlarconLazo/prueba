const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const moment = require('moment');
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findCategoryById,
} = require('./consultas');

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

//Vista
app.get('/', async (req, res) => {
  try {
    res.render('index');
  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
    });
  }
});

//API
app.get('/api/v1', (req, res) => {
  res.json({
    message: 'API funcionando correctamente',
    timestamp: moment().unix(),
    timestamp_: moment().format('YYYY-MM-DD, HH:mm:ss'),
    timestamp__: moment().locale('es').format('LLLL'),
  });
});

app.post('/api/v1/users', (req, res) => {
  console.log(req.body);
  res.json({
    data: req.body,
  });
});

app.get('/api/v1/categories', async (req, res) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
    });
  }
});

app.post('/api/v1/categories', async (req, res) => {
  console.log(req.body);
  const { id, name } = req.body;

  try {
    const payload = { id, name };
    console.log(payload);
    const category = await createCategory(Object.values(payload));
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
    });
  }
});

app.put('/api/v1/categories/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const categoryExist = await findCategoryById(id);

    if (categoryExist) {
      const payload = { name };
      console.log(payload);
      const category = await updateCategory(id, Object.values(payload));
      res.status(200).send(category);
    } else {
      res.status(404).send(null);
    }

  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
    });
  }
});

app.delete('/api/v1/categories/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const categoryExist = await findCategoryById(id);

    if (categoryExist) {
      const category = await deleteCategory(id);
      res.status(200).send(`La categoría de id ${id} fue eliminado.`);
    } else {
      res.status(404).send(null);
    }

  } catch (error) {
    res.status(500).send({
      error: `Algo salió mal... ${error}`,
    });
  }
})

//Configuración del servidor
app.listen(8080, () => {
  console.log('Servidor habilitado');
});
