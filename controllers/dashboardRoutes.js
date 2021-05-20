const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });
    const posts = postData.map((post) => post.get({ plain: true }));
      res.render('allPostsMgr', { 
        layout: 'dashboard',
        posts,
       });
      } catch (err) {
      res.redirect('login');
    }
  });
router.get('/new', withAuth, (req, res) => {
  res.render('newPost', {
    layout: 'dashboard',
  });
});
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findbyPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('editPost', {
        layout: 'dashboard',
        posts,
      });
    } else {
      res.status(404).end();
    }
  } catch (err)  {
      res.redirect('login');
  }
});
module.exports = router;
