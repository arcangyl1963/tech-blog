const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
  const postContent = await Post.findAll({
    where: {
      userId: req.session.userId,
    },
  });
    const posts = postContent.map((post) => post.get({ plain: true }));
      res.render('allPostsMgr', { 
        layout: 'dashboard',
        posts,
       });
      } catch (err) {
        alert(err);
      res.redirect('/login');
    }
  });
router.get('/new', withAuth, (req, res) => {
  res.render('newPost', {
    layout: 'dashboard',
  });
});
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postContent = await Post.findByPk(req.params.id);
    if (postContent) {
      const post = postContent.get({ plain: true });
      res.render('editPost', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err)  {
    console.log(err);
      res.redirect('/login');
  }
});
module.exports = router;
