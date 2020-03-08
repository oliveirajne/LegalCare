// const Spot = require('../models/Spot');
const Ocorrencia = require('../models/Ocorrencia');
const User = require('../models/User');

module.exports = {

    // async index(req, res){
    //     const { tech } = req.query;

    //     const  spots = await Spot.find({ techs: tech});

    //     return res.json(spots);
    // },

    async index(req, res){
        const { status } = req.query;

        const ocorrencias = await Ocorrencia.find({ status: status });

        return res.json(ocorrencias);
    },

    // async store(req, res) {
    //     const { filename } = req.file;
    //     const { company, techs, price } = req.body;
    //     const { user_id } = req.headers;

    //     const user = await User.findById( user_id);

    //     if (!user) {
    //         return res.status(400).json({ error: 'User does not exists'});
    //     }

    //     const spot = await Spot.create({
    //         user: user_id,
    //         thumbnail: filename,
    //         company,
    //         techs: techs.split(',').map(tech => tech.trim()),
    //         price
    //     });

    //     return res.json({ spot })
    // }

    async store(req, res) {
        const { titulo, descricao, status } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não existe'});
        }

        const ocorrencia = await Ocorrencia.create({
            user: user_id,
            titulo,
            descricao,
            status
        });

        return res.json({ ocorrencia })
    }
};