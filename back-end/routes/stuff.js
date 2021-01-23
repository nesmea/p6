const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/sauces', auth, stuffCtrl.createThing);
router.put('/sauces/:id', auth, stuffCtrl.modifyThing);
router.delete('/sauces/:id', auth, stuffCtrl.deleteThing);
router.get('/sauces/:id', auth, stuffCtrl.getOneThing);
router.get('/sauces', auth, stuffCtrl.getAllThings);

module.exports = router;
