const express = require('express');
const router = express.Router();
const Group = require('../../models/group.model');
const Invitation = require('../../models/invitation.model');

router.route('/').get((req, res)=>{
    Invitation.find()
    .then(invitations => res.json(invitations))
    .catch(err => res.status(400).json('Error ' + err));

});

router.route('/add').post((req, res)=>{
    const from_user = req.body.from_user;
    const to_user = req.body.to_user;
    const groupname = req.body.groupname;
    const role= req.body.role;
    const accepted= req.body.accepted;
    

    const newInvitation= new Invitation({
        from_user,
        to_user,
        groupname,
        role,
        accepted,
        
    });
    newInvitation.save()
    .then(() => res.json('Invitation sent  !'))
    .catch(err => res.status(400).json('Error'+ err));

});


router.route('/:id').get((req, res) => {
    Invitation.findById(req.params.id)
    .then(invitation => res.json(invitation))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/:id').delete((req, res) => {
    Invitation.findByIdAndDelete(req.params.id)
    .then(() => res.json('Invitation cancelled !'))
    .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/update/:id').post((req, res) => {
    Invitation.findById(req.params.id)
    .then(invitation => {
        invitation.from_user= req.body.from_user;
        invitation.to_user = req.body.to_user;
        invitation.role = req.body.role
        invitation.groupname= req.body.groupname;
        invitation.accepted= req.body.accepted;
        
        //lezemni nzid group.admins et search group bar , le data model invitation pour inviter des membres bech ywaliw admins 
        // fi groups ken 9eblouu

        invitation.save()
        .then(() => res.json('invitation Updated !'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error :' +err));
});


router.route('/Add/:id').post((req, res) => {
    Invitation.findByIdAndDelete(req.params.id).then(
        Group.findOne({name:req.body.groupname}).then((gp)=>{
            if(req.body.role[0] ==="Admin"){
                gp.admins.push(req.body.to_user)
               
            }else{
                gp.members.push(req.body.to_user)
            }
            gp.save().then().catch(err=>res.status(400).json(err))
            res.json(gp)
        }).catch(err=>res.json(err))
    ) 
    
    
    
});
module.exports = router ;
