const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  //1) Get tour data from collection
  const tours = await Tour.find();

  //2) Build template

  //3) Return rendered template to client

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });

  //2) Build template

  //3) Return rendered template to client

  res.status(200).render('overview', {
    title: 'All Tours',
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});
