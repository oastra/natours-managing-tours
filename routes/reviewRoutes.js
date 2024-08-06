const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

//POST/tour/id/reviews -> nested route
//GET/tour/id/reviews -> nested route
//POST/tour/id/reviews -> nested route

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview,
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(reviewController.updateReview)
  .delete(
    reviewController.deleteReview,

    // authController.restrictTo('user', 'admin'), // restrict deletion
    // reviewController.deleteReview,
  );

module.exports = router;
