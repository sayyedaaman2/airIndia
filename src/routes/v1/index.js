const express = require("express");
const router = express.Router();

const airlineController = require('../../controllers/airlineController');
const flightController = require('../../controllers/flightController');
const reviewController = require('../../controllers/reviewController');
const bookingController = require('../../controllers/bookingController');
const helpController = require('../../controllers/helpController');

router.get('/help', helpController.helpDetails);

router.post('/airline', airlineController.createAirline);
router.get('/airline/:name', airlineController.getAirline);
router.get('/airline', airlineController.getAllAirline);
router.delete('/airline', airlineController.destoryAirline)

router.post('/flight', flightController.createFlight);
router.get('/flight/:flightNumber', flightController.getFlight);
router.get('/flight', flightController.getAllFlights);
router.delete('/flight', flightController.destoryFlight)


router.post('/review', reviewController.createReview);
router.get('/review/:flightId', reviewController.getAllReview);
router.get('/review/:flightId/:userId', reviewController.getReview);
router.delete('/review', reviewController.destoryReview);

router.post('/booking', bookingController.createBooking);
router.get('/booking/:id/boardingPass', bookingController.getBoardingPass);
router.delete('/booking/:id', bookingController.cancelBooking);
router.get('/travels', bookingController.getAllTraveler);


module.exports = router;
