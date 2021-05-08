module.exports = (req, res, next) => {
  if (!req.body) {
    return res.status(500).send('No request body');
  }
  try {
    const resting = Number(req.body.resting_hr);
    const current = Number(req.body.current_hr);
    if (isNaN(resting) || isNaN(current)) {
      return res.status(500).send('Input must be a number');
    }
    req.resting = resting;
    req.current = current;
    return next();
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
