exports.whoami = (req, res) => {
  // console.log('req', req.headers)
  const language = req.headers['accept-language'];
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const useragent = req.headers['user-agent'];
  
  res.json({
    ipaddress: ip,
    language: language,
    software: useragent
  })
} 
