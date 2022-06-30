const User = require('../models/User');


module.exports.signUp = function(req, res) {

    const newUser = new User(req.body);

    newUser.save().then(Result=>{

        const result = Result.toObject();

        //usuário foi cadastrado
        if(result)
            res.send(result);

    }).catch(error=>{
        //error unique key duplicate / usuário já tinha sido cadastrado
        if(error.code === 11000){
            res.send(null);
        }
    });

}

module.exports.getInfos = function(req, res) {

    User.findOne({ uid: req.body.uid}, (err, user)=>{

        if(err)
            res.send(null);
        else if(user)
            res.send(user);
        else
            //usuário não encontrado
            res.send(null);

    });

}


module.exports.update = function(req, res) {

    const filter = { uid: req.body.uid };

    const update = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    };

    User.findOneAndUpdate(filter, update).then(doc=>{
        //this param doc is the document before update
        res.send("Profile's saved");

    }).catch(error=>{

        console.error(error);
        res.send(error);

    });


}