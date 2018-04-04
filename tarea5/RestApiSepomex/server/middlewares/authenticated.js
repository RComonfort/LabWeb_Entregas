const jwt = require('jwt-simple');
const moment = require('moment');
const KEY = 'clave_secreta_proyecto';

exports.ensureAuth = (req, res, next) => {
	if(!req.headers.authorization){
		return res.status(403).send({ message: 'The request does not contain the authorization header.'});
	}

	let payload;
	let token = req.headers.authorization.replace(/['"]+/g, '');

	try{
		payload = jwt.decode(token, KEY);

		if(payload.exp <= moment().unix()){
			return res.status(401).send({message: 'The token has expired.'});
		}
	}catch(ex){
		//console.log(ex);
		return res.status(404).send({message: 'Token not valid.'});
	}

	req.user = payload;

	next(); 
};