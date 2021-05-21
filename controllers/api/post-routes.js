const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
// find all users

router.post('/', withAuth, async (req, res) => {
  try {
    const createPost = await Post.create({
      ...body,
      user_id: req.session.user_id,
    });
    res.json(createPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [updatedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [deletedRows] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedRows > 0) {
      res.status(200).end();
    } else {
      res.json(404).end();
    }
  } catch (err) {
    req.status(500).json(err);
  }
});
module.exports = router;
