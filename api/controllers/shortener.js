const dns = require('dns');
const mongoose = require('mongoose')
const Link = require('../models/shortener');


exports.shortener_get_link = (req, res) => {
  Link.findById(req.params.id)
  .exec()
  .then(order => {
    if (!order) {
      return res.status(404).json({ message: "Link not found" });
    }
    console.log('order', order)
    res.redirect(order.link)
  })
  .catch(error => res.status(500).json(error));
};

exports.shortener_post_link = (req, res) => {  
  const shortener = new Link({
    _id: new mongoose.Types.ObjectId(),
    link: req.body.link
  });
  shortener.save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      original_url: result.link,
      short_url: result._id
    });
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ error });
  });
};
