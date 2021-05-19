const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: [
                    'id',
                    'title',
                    'created_on']
            },
            {
            model: Comment,
            attributes: [
                'id',
                'comment_body',
                'created_on'],
                include: {
                    model: Post,
                    attributes: ['title']
            }
        }
        ]
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found matching that ID' });
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// create a user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json(userData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found with matching email address' });
            return;
        }
        const validPW = userData.checkPW(req.body.password);
        if (!validPW) {
            res.status(400).json({ message: 'You have entered an incorrect password!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json({ user: userData, message: 'You have successfully logged in!' });
        });
    });
});
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
router.put('.:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData[0]) {
            res.status(404).json({ message: 'No user found matching that ID'});
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user found matching that ID' });
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;