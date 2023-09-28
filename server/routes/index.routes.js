const router = require("express").Router();
const phonesData = require('../../technical_challenge_WD/data/phones.json'); 

const { getPhones } = require("../controllers/phoneController.js");


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.route("/phones").get(getPhones);

router.get('/phones/:id', (req, res) => {
  const phoneId = req.params.id;
  const idToSearch = parseInt(phoneId, 10);
  const phone = phonesData.find((phone) => phone.id === idToSearch);

  if (!phone) {
    return res.status(404).json({ error: 'Phone not found' });
  }

  res.json(phone);
});

module.exports = router;
