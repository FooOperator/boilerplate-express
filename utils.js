
function json_get(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}

function currentTime_get(req, res, next) {
  req.time = new Date().toString()
  next()
}

function sendTime_get(req, res) {
  res.json({ time: req.time })
}

function echo_get(req, res, next) {
  const word = req.params.word
  res.json({ echo: word })
}

function name_get(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
}

function name_post(req, res) {
  var firstName = req.body.first;
  var lastName = req.body.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
}

module.exports = {
  json_get, 
  echo_get, 
  name_get, 
  name_post,
  sendTime_get, 
  currentTime_get
}