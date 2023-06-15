const router = require('express').Router();
const jwt = require('jsonwebtoken');
const user = require('../models/user.model');

router.route('/').post(async (req, res) => {
  const { email, password } = req.body;
 // console.log(email, password);
  try {
    const myu = await user.findOne({ email: email });

    if (myu) {
      if (password === myu.password) {
        const token = jwt.sign({ uid: myu._id }, 'JHG78s2jhsgVBNCS7TFnchjgrfuy', {
          expiresIn: '1h', 
        });
        const responseObj = { token: token };
        res.json(responseObj);
      } else {
        res.status(401).json("Invalid Email/Password");
      }
    } else {
      res.status(401).json("Invalid Email/Password");
    }
  } catch (e) {
    res.status(500).json("error");
    console.log(e);
  }
});

module.exports = router;
