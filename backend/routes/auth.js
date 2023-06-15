const router = require('express').Router();
const session = require('express-session');
const user = require('../models/user.model');
router.route('/').post(async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const myu = await user.findOne({ email: email });
      
      if (myu) {
        if (password === myu.password) {
          req.session.id = myu.email;
          const responseObj = { sessionId: req.session.id, email: myu.email };
          res.json(responseObj);
        } else {
            res.status(401).json("error");
        }
      } else {
        res.status(401).json("error");
      }
    } catch (e) {
      res.status(505).json("error");
      console.log(e);
    }
  });
  

module.exports = router;