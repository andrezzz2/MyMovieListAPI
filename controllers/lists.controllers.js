const List = require('../models/List');


module.exports.addTitle = function(req, res) {

    List.findOne({uid: req.body.uid, name: req.body.name}, (err, list)=>{

        if(err){

            console.error(err);
            res.send(null);

        }
        
        //Lista existe: atualiza colocando novo titulo
        if(list){

            list.titles.push(req.body.title);
            list.save().then((Result)=>{
                
                const result = Result.toObject();

                if (result)
                    res.send(result);

            }).catch(error=>{
                console.error(error);
            })

        } else {
            //Lista não existe: cria nova lista com o titulo ja inserido
            const list = {
                uid: req.body.uid,
                name: req.body.name,
                titles: [req.body.title]
            }

            const newList = new List(list);
            newList.save().then((Result)=>{
            
                const result = Result.toObject();
    
                if (result)
                    res.send(result);

            }).catch(error=>{

                console.error(error);
                res.send(null);

            })

        }
        
    });

}

module.exports.getAll = function(req, res) {

    List.find({uid: req.body.uid}, (err, lists)=>{

        if(err)
            res.send(null);
        else{
            //envia as listas ou lista vazia se não achou nenhuma lista desse usuário
            console.log(lists);
            res.send(lists);
        }
            

    }).clone().catch(error=>{

        console.error(error);
        res.send(null);

    });

}