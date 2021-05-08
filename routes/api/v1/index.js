const { Router } = require('express');
const { calculateZone } = require('../../../helpers/calculateZone');
const { zones } = require('../../../helpers/zones');
const validateHR = require('../../../middleware/validateHR');

module.exports = () => {
  const api = Router();

  api.get('/zones', async (_, res) => {
    try {
      return res.status(200).json(zones);
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  });

  api.post('/current_zone', [validateHR], async (req, res) => {
    try {
      const { resting, current } = req;
      
      return res.status(200).send(calculateZone(resting, current));
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  });

  return api;
};
