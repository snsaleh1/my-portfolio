var Testimonial = require('../models/user');

module.exports = {
  create,
  perTes,
  proTes,
  tesBoard
};

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    await Testimonial.create(req.body);
    tesBoard(req, res);
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





