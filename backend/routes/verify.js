const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const UserDetails = require('../models/userdetails.model');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
 // console.log(token);
  
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const accessToken = token.split(' ')[1];
  jwt.verify(accessToken, 'JHG78s2jhsgVBNCS7TFnchjgrfuy', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    //console.log(req.user);
    next();
  });
};

router.get('/user-details', authenticateToken, (req, res) => {
  const userId = req.user.uid;
  //console.log('User id:',userId);
  UserDetails.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
     // console.log('User details:', user);
      res.json(user);
    })
    .catch((error) => {
      console.log('Error fetching user details:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
