const Product = require('../models').products;

module.exports = {
    create  (req, res) {
        return Product
            .create ({
                codigo: req.body.codigo,
                nombre: req.body.nombre,
                precio: req.body.precio,
                exist: req.body.exist,
            })
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error));
    },
    list (req, res) {
        return Product
            .findAll() 
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error));
    },
    retrieve (req, res) {
        if (!req.params.id || (isNaN(req.params.id)))
            return res.status(400).send({message: 'The id field must be a valid integer.'});

        return Product
            .findById(req.params.id, {

            })
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                      message: 'Product not found',
                    });
                }
                return res.status(200).send(product);
            })
            .catch(error => res.status(400).send(error));
    },
    update (req, res) {

        if (!req.params.id || (isNaN(req.params.id)))
            return res.status(400).send({message: 'The id field must be a valid integer.'});

        return Product
            .findById(req.params.id, {})
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                      message: 'Product not found',
                    });
                }
                return product
                    .update({
                        codigo: req.body.codigo || product.codigo,
                        nombre: req.body.nombre || product.nombre,
                        precio: req.body.precio || product.precio,
                        exist: req.body.exist || product.exist,
                    })
                    .then(product => res.status(200).send(product))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));

    },
    destroy(req, res) {
        if (!req.params.id || (isNaN(req.params.id)))
            return res.status(400).send({message: 'The id field must be a valid integer.'});

        return Product
            .findById(req.params.id, {})
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                      message: 'Product not found',
                    });
                }
                return product
                    .destroy()
                    .then(product => res.status(200).send({message: 'Product deleted succesfully.'}))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};