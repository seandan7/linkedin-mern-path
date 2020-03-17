const express = require('express');
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');
const router = express.Router();

module.exports = params => {
  const { speakersService } = params;
  router.get('/', async (request, response, next) => {
    try {
      const topSpeakers = await speakersService.getList();
      const artwork = await speakersService.getAllArtwork();
      return response.render('layout', {
        pageTitle: 'Welcome',
        topSpeakers,
        artwork,
        template: 'index',
      });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
