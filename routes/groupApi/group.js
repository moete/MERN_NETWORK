const express = require("express");
const router = express.Router();
const Group = require("../../models/group.model");
const auth = require("../../middleware/auth");
const User = require("../../models/User");

router.route("/").get((req, res) => {
  Group.find()
    .then((groups) => res.json(groups))
    .catch((err) => res.status(400).json("Error " + err));
});
router.post("/add", auth, async (req, res) => {
  const name = req.body.name;
  const theme = req.body.theme;
  const privacy = req.body.privacy;
  const coverphoto = req.body.coverphoto;
  const members = req.body.members;
  const admins = req.body.admins;
  // const superadmin = req.body.superadmin;
  try {
    const superadmin = await User.findById(req.user.id);
    console.log(superadmin);
    const newGroup = new Group({
      name,
      theme,
      members,
      admins,
      coverphoto,
      privacy,
      superadmin,
    });
    await newGroup.save();
    res.json(newGroup);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.route("/:id").get((req, res) => {
  Group.findById(req.params.id)
    .then((group) => res.json(group))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Group.findByIdAndDelete(req.params.id)
    .then(() => res.json("Group Deleted !"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Group.findById(req.params.id)
    .then((group) => {
      group.name = req.body.name;
      group.theme = req.body.theme;
      group.privacy = req.body.privacy;
      group.coverphoto = req.body.coverphoto;
      group.members = req.body.members;
      group.admins = req.body.admins;
      group.superadmin = req.body.superadmin;
      //lezemni nzid group.admins et search group bar , le data model invitation pour inviter des membres bech ywaliw admins
      // fi groups ken 9eblouu

      group
        .save()
        .then(() => res.json("Group Updated !"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
