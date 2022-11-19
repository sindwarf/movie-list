const models = require('../Models/MovieModel.js')


exports.get = (req, res) => {
models.get((err, data) => {
  if(err) {
    res.sendStatus(404);
  } else {
  res.status(200).json(data);
  }
})
}

exports.post = (req, res) => {
  //TODO split up incoming requests into three array string values
    //body coming in will be an object with a title and isWatched value
  let params = [];
  params[0] = req.body.title;
  req.body.isWatched ? params[1] = 0 : params[1] = 1;
  models.post(params, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      console.log('success');
      res.sendStatus(201);
    }
  })
}