const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
    const postContent = await Post.findAll({
        include: [User],
    });
        const posts = postContent.map((post) => post.get({ plain: true }));
        res.render('allPosts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/post/:id', async (req, res) => {
    try {
      const postContent = await Post.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postContent) {
        const post = postContent.get({ plain: true });
  
        res.render('post-comment', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/registration', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('registration');
  });
  
module.exports = router;