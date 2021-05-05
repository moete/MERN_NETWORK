const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const Profile = require('../../models/Profile');

const User = require('../../models/User');
// @route       GET api/users
// @desc        register user
// @access      Public
router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'please include a valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    res.setHeader(
      'Access-Control-Allow-Headers',
      'content-type',
      'Authorization',
      'x-auth-token'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'PUT, POST, GET, DELETE, PATCH, OPTIONS'
    );
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // see if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      // get users gravatar

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //encrypt password

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      //return jsonwebtoken

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ user, token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
//
//Follow
router.put('/follow', auth, (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user.id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user.id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .select('-password')
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});
// unfollow
router.put('/unfollow', auth, (req, res) => {
  res.setHeader(
    'Access-Control-Allow-Headers',
    'content-type',
    'Authorization',
    'x-auth-token'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, PATCH, OPTIONS'
  );
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user.id },
    },
    {
      new: true,
    },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user.id,
        {
          $pull: { following: req.body.unfollowId },
        },
        { new: true }
      )
        .select('-password')
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});

router.get('/getfollowing', auth, async (req, res) => {
  const following = [];

  try {
    const user = await User.findById(req.user.id);
    for (const id of user.following) {
      const user = await Profile.find({ user: id }).populate('user', [
        'name',
        'avatar',

        'following',
        'followers',
      ]);

      following.push(user);
    }
  } catch (error) {}
  res.json(following);
  //const profiles = await Profile.find().populate('user', ['name', 'avatar']);
});

router.get('/getfollowers', auth, async (req, res) => {
  const followers = [];
  try {
    const user = await User.findById(req.user.id);
    for (const id of user.followers) {
      const user = await Profile.find({ user: id }).populate('user', [
        'name',
        'avatar',

        'following',
        'followers',
      ]);
      followers.push(user);
    }
  } catch (error) {}
  res.json(followers);
});
module.exports = router;
