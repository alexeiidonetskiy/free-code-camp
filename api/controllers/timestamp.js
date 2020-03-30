const invalidDate = 'Invalid Date'

const generateTimeResponse = (time) => {
  return {"unix": time.getTime(), "utc" : time.toUTCString() }
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

exports.get_time = (req, res) => {
  const { dateString } = req.params;
  const dateFromString = isNumeric(dateString) 
                      ? new Date(+dateString) 
                      : new Date(dateString);
                      
  if ( dateFromString === invalidDate) {
    res.json({"error" : invalidDate });
  } else {
    res.json(generateTimeResponse(dateFromString))
  }
}

exports.get_current_time = (req, res) => {
  const currentDate = new Date();
  res.json(generateTimeResponse(currentDate))
}
