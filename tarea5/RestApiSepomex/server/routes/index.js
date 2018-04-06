
const sepomexController = require('../controllers').sepomexes;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));


  app.get('/api/sepomex-edos', sepomexController.listEdos);
  app.get('/api/sepomex-municipios/:idestado',   sepomexController.listMunicipios);
  app.post('/api/sepomex-colonias',   sepomexController.listColonias);

};