const express = require('express');
const router = express.Router();

module.exports = params => {
  const { speakersService } = params;

  router.get('/', async (request, response, next) => {
    try {
      const speakers = await speakersService.getList();
      const artwork = await speakersService.getAllArtwork();
      return response.render('layout', {
        pageTitle: 'Speakers',
        speakers,
        artwork,
        template: 'speakers',
      });
    } catch (err) {
      return next(err);
    }
  });
  // detail page
  router.get('/:shortname', async (request, response, next) => {
    try {
      const speaker = await speakersService.getSpeaker(request.params.shortname);
      const artwork = await speakersService.getArtworkForSpeaker(request.params.shortname);
      return response.render('layout', {
        pageTitle: 'Speakers',
        speaker,
        artwork,
        template: 'speakers-detail',
      });
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
