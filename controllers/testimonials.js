var Testimonial = require('../models/user');

module.exports = {
  create,
  tesBoard
};

async function create(req, res) {
  console.log('user: ', req.body.user)
  try {
    const newTes = await Testimonial.create(req.body)
    console.log(req.body)
    res.status(201).json(newTes)
  } catch (err) {
    res.json({err});
  }
}

async function tesBoard(req, res) {
  const testimonials = await Testimonial.find({})
    .sort({tesPost: 1})
    .limit(req.query.limit || 50);
  res.json(testimonials);
}





