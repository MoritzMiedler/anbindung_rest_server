const errorHandler = (err, req, res, next) => {
  res.status(400).send(err.message);
  //
};

const notFound = (req, res) => {
  res.status(404).send('Route nicht gefunden');
  //
};

module.exports = { errorHandler, notFound };
