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

  router.put('/likes/:id', (req, res) => {
    const id = req.params.id
    const like = req.body.image.likes;
    const newLike = (like + 1);
    console.log('Update like', like);
    console.log('id', id)
    console.log('newLikes', newLike);
    let queryText = `UPDATE images SET likes=$2 WHERE image_id=$1`;
    pool.query(queryText, [id, newLike])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      })

  }); // end PUT for likes

  router.put('/views/:id', (req, res) => {
    const id = req.params.id
    const view = req.body.image.views;
    const newView = (view + 1);
    console.log('Update view', view);
    console.log('newView', newView);
    let queryText = `UPDATE images SET views=$2 WHERE image_id=$1`;
    pool.query(queryText, [id, newView])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      })

  }); // end PUT for views


  router.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const sqlText = 'SELECT comments.image_id, comments.name, comments.comment FROM comments JOIN images ON comments.image_id=images.image_id WHERE comments.image_id=$1';
    pool.query(sqlText, [id])
      .then(function(result) {
        console.log('Get result:', result);
        res.send(result.rows);
      })
      .catch(function(error){
        console.log('Error on Get:', error);
        res.sendStatus(500);
      })
  });





module.exports = router;