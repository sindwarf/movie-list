const models = require('../Models/MovieModel.js')


exports.get = (req, res) => {
  console.log(`SERVING REQUEST TYPE ${req.method} AT ${req.url}`);
models.get((err, data) => {
  if(err) {
    res.sendStatus(404);
  } else {
    for(let obj of data) {
      obj.isWatched = !!obj.isWatched;
    }
  res.status(200).json(data);
  }
})
}

exports.post = (req, res) => {
    console.log(`SERVING REQUEST TYPE ${req.method} AT ${req.url}`);
  let params = [];
  params[0] = req.body.title;
  req.body.isWatched ? params[1] = 1 : params[1] = 0;
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

exports.put = (req, res) => {
  console.log(`PUT: SERVING REQUEST TYPE ${req.method} AT ${req.url}`);
  let params = [];
  params[0] = req.body.title;
  req.body.isWatched ? params[1] = 1 : params[1] = 0;
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

//TODO exports.put