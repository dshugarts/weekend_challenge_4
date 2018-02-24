const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM images ORDER BY pic';
    pool.query(sqlText)
      .then(function(result) {
        console.log('Get result:', result);
        res.send(result.rows);
      })
      .catch(function(error){
        console.log('Error on Get:', error);
        res.sendStatus(500);
      })
  }); // end GET

  router.put('/:id', (req, res) => {
    const id = req.params.id
    const like = req.body.image.likes;
    const newLike = (like + 1);
    console.log('Update song', like);
    console.log('newLikes', newLike);
    let queryText = `UPDATE images SET likes=$2 WHERE id=$1`;
    pool.query(queryText, [id, newLike])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      })

  }); // end PUT






module.exports = router;