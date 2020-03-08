// const Spot = require('../models/Spot');
const Ocorrencia = require('../models/Ocorrencia');

// module.exports = {
//     async show(req, res){
//         const { user_id } = req.headers;

//         const spots = await Spot.find({ user: user_id });

//         return res.json(spots); 
//     }
// }

module.exports = {
    async show(req, res){
        const { user_id } = req.headers;

        const ocorrencias = await Ocorrencia.find({ user: user_id });

        return res.json(ocorrencias);
    }
}