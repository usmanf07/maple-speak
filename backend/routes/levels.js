const express = require('express');
const router = express.Router();
const levels = require('../models/levelsSchema.model');

router.get('/:levelType', async (req, res) => {
    const levelType = req.params.levelType;
  
    try {
      const result = await levels.find({ levelType: levelType }).exec();
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
router.get('/:levelType/:levelNo', async (req, res) => {
  const levelType = req.params.levelType;
  const levelNo = req.params.levelNo;
console.log (levelType, levelNo);
  try {
    const result = await levels.findOne({ levelType: levelType, levelNo: levelNo }).exec();

    if (result) {
      res.json({ level: result });
    } else {
      res.status(404).json({ error: 'Level not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




router.post('/addLevel', async (req, res) => {
  const { levelNo, levelName, levelType } = req.body;

  try {
    const newLevel = new levels({
      levelNo,
      levelName,
      levelType
    });

    const savedLevel = await newLevel.save();
    res.status(201).json({ level: savedLevel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/addQuestions', async (req, res) => {
  const { levelId, questions, answers } = req.body;

  try {
    const level = await Level.findById(levelId);

    if (!level) {
      return res.status(404).json({ error: 'Level not found' });
    }

    level.id_ = levelId;
    level.questions = questions;
    level.answers = answers;

    const updatedLevel = await level.save();
    res.status(200).json({ level: updatedLevel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;