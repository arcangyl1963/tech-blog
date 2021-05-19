const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Comment, Post, User, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

// find all users
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_on',
        ],
        order: [['created_on', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_body',
                    'post_id',
                    'user_id',
                    'created_on'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_on',
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_body',
                    'user_id',
                    'created_on',
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post match found with that id'});
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        user_id: req.session.user_id
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(postData => {
        if (!postData) {
            res.status(404).json({ message: 'No post match found with that id' });
            return;
        }
        res.status(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', (req, res) => {
    Post.destroy (
        {
            where: {
                id: req.params.id
            }
        })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ message: 'No post match found with that id'});
                return;
            }
            res.json(postData);
        })
        .catch(err => {
            console.log(err);
            req.status(500).json(err);
        });
});
module.exports = router;