const express = require('express');
const { saveEmails, getEmailsFromType, getEmailById, moveToDraft, moveToBin } = require('../controller/emailController');

const router = express.Router();

router.post('/save/', saveEmails);
router.get('/mails/:type', getEmailsFromType);
router.get('/mail/:id', getEmailById);
router.put('/save/draft/', moveToDraft);
router.put('/moveToBin/', moveToBin);


module.exports = router;