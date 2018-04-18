const productsController = require('../controllers').products;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      message: 'Welcome to the products API',
    }));

    app.post('/api/products', productsController.create);
    app.get('/api/products', productsController.list);
    app.get('/api/products/:id', productsController.retrieve);
    app.put('/api/products/:id', productsController.update);
    app.delete('/api/products/:id', productsController.destroy);
};