module.exports = verifyData;

function verifyData(props) {
  return function(req, res, next) {
    if (Object.entries(req.body).length === 0) {
      res
        .status(400)
        .json({ message: 'Missing ALL data needed to submit a new item.' });
    } else if (!req.body[props]) {
      res.status(400).json({ message: `Missing required ${prop} field.` });
    } else {
      next();
    }
  };
}
