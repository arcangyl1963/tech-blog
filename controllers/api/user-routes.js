const router = require('express').Router();
const {  User } = require('../../models');
// create a user
router.post('/', async (req, res) => {
    try{
    const createUser = await User.create({
        username: req.body.username,
        password: req.body.password
    });
    req.session.save(() => {
        req.session.userId = createUser.id;
        req.session.username = createUser.username;
        req.session.loggedIn = true;
        res.json(createUser);
    });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/login', async (req, res) => {
    try {
    const user = User.findOne({
        where: {
            username: req.body.username,
        },
    });

        if (!user) {
            res.status(400).json({ message: 'No matching user account found.' });
            return;
        }
        const validPW = user.checkPW(req.body.password);
        if (!validPW) {
            res.status(400).json({ message: 'The password entered does not match. Please try again.' });
            return;
        }
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
            res.json({ user: userData, message: 'You have successfully logged in!' });
        });
    } catch (err) {
        res.status(400).json({ message: 'No matching user account found.'});
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;