const express = require('express');
const router = express.Router();

const Membership = require('../../models/membership.model');

router.route('/').get((req, res)=>{
    Membership.find()
    .then(memberships => res.json(memberships))
    .catch(err => res.status(400).json('Error ' + err));

});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const desiredgroup = req.body.desiredgroup;
    const question_and_condition = req.body.question_and_condition;
    const accepted= req.body.accepted;
    

    const newMembership= new Membership({
        username,
        desiredgroup,
        question_and_condition,
        accepted,
        
    });
    newMembership.save()
    .then(() => res.json('Membership request sent  !'))
    .catch(err => res.status(400).json('Error'+ err));

});


router.route('/:id').get((req, res) => {
    Membership.findById(req.params.id)
    .then(membership => res.json(membership))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/:id').delete((req, res) => {
    Membership.findByIdAndDelete(req.params.id)
    .then(() => res.json('Membership request cancelled !'))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/update/:id').post((req, res) => {
    Membership.findById(req.params.id)
    .then(membership => {
        membership.username= req.body.username;
        membership.desiredgroup = req.body.desiredgroup;
        membership.question_and_condition = req.body.question_and_condition
        membership.accepted= req.body.accepted;
        
        //lezemni nzid group.admins et search group bar , le data model membership pour inviter des membres bech ywaliw admins 
        // fi groups ken 9eblouu

        membership.save()
        .then(() => res.json('Membership request Updated !'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error :' +err));
});



module.exports = router ;
