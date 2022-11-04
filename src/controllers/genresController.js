const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
        try {
            let genres = await db.Genre.findAll({});
            return res.status(200).json({
                ok: true,
                meta: {
                    status : 200,
                    url: "api/genres"
                },
                data: {
                    genres,
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
            let genre = await db.Genre.findByPk(req.params.id);
            return res.status(200).json({
                ok: true,
                meta: {
                    status : 200,
                    url: "api/genres/detail",
                    
                },
                data: {
                    genre,
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
    }

}

module.exports = genresController;