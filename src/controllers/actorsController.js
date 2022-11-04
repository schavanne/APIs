const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    'list': async (req, res) => {
        try {
            let actors = await db.Actor.findAll({});
            return res.status(200).json({
                ok: true,
                meta: {
                    status : 200,
                    url: "api/actors"
                },
                data: {
                    actors,
                }
            });
            }   
            catch (error) {
                return res.status(error.status || 500).json({
                meta:{
                    status: 500,
                    msg: error.message
                }
                });
            }
    },
    
    'detail': async (req, res) => {
        try {
            let actor = await db.Actor.findByPk(req.params.id);
            return res.status(200).json({
                ok: true,
                meta: {
                    status : 200,
                    url: "api/actors/detail",
                    
                },
                data: {
                    actor,
                }
            });
            }   
            catch (error) {
                return res.status(error.status || 500).json({
                meta:{
                    status: 500,
                    msg: error.message
                }
                });
            }
    },
    create: function (req,res) {
        db.Actor
        .create(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                rating: req.body.rating,
                favorite_movie_id: req.body.favorite_movie_id,
            }
        )
        .then((newActor)=> {
            return res.status(200).json({
                ok: true,
                meta: {
                    status : 200,
                    url: "api/actors/create"
                },
                data: {
                    newActor,
                }
            });})            
        .catch(error => 
             res.status(error.status || 500).json({
                meta:{
                    status: 500,
                    msg: error.message
                }
            }))
    },
    destroy: async (req,res) => {
        try{
            let actor = await db.Actor.findByPk(req.params.id);
            let deleted = await db.Actor.destroy({where: {id: req.params.id}, force: true})
            return res.status(200).json({
                ok: true,
                meta: {
                    status : 200,
                    url: "api/actors/delete"
                },
                data: {
                    actor
                }
            })
        }
        catch(error){
            res.status(error.status || 500).json({
                meta:{
                    status: 500,
                    msg: error.message
                }
            })
        }
    }
}
module.exports = actorsController;