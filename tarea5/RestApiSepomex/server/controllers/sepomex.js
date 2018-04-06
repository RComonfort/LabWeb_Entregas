const Sepomex = require('../models').Sepomex;

module.exports = {
	listEdos(req, res)
	{
		return Sepomex
			.findAll( {
				attributes: ['idestado', 'estado']
			})
			.then (sepo => res.status(200).send(sepo))
			.catch(error => res.status(400).send(error));
	},
	listMunicipios (req, res)
	{
		if (!req.params.idestado)
	  return res.status(400).send({message: 'El id del estado debe ser un numero entero valido'});
	  
	  return Sepomex
		.findAll({
			where: {idestado: req.params.idestado},
			attributes: ['idmunicipio', 'municipio']
		})
		.then (sepo => res.status(200).send(sepo))
		.catch(error => res.status(400).send(error));
	},
	listColonias (req, res)
	{
		var hasIdEdo = true;
		var hasIdMpio = true;

		if (!req.body.idestado)
			hasIdEdo = false;

		if (!req.body.idmunicipio)
		hasIdMpio = false;

		if (!hasIdEdo && !hasIdMpio)
			return res.status(400).send({message: 'Debe especificar un id de municipio, estado, o ambos'});

		if (hasIdEdo && hasIdMpio)
		{
			return Sepomex
			.findAll({
				where: {
					idestado: req.body.idestado,
					idmunicipio: req.body.idmunicipio,
					tipo: 'Colonia'
				},
				attributes: ['estado', 'municipio', 'cp', 'asentamiento']
			})
			.then (sepo => res.status(200).send(sepo))
			.catch(error => res.status(400).send(error));
		}
		else if (!hasIdEdo && hasIdMpio)
		{
			return Sepomex
			.findAll({
				where: {
					idmunicipio: req.body.idmunicipio,
					tipo: 'Colonia'
				},
				attributes: ['estado', 'municipio', 'cp', 'asentamiento']
			})
			.then (sepo => res.status(200).send(sepo))
			.catch(error => res.status(400).send(error));
		}
		else
		{
			return Sepomex
			.findAll({
				where: {
					idestado: req.body.idestado,
					tipo: 'Colonia'
				},
				attributes: ['estado', 'municipio', 'cp', 'asentamiento']
			})
			.then (sepo => res.status(200).send(sepo))
			.catch(error => res.status(400).send(error));
		}
	}
	
};
