const mongoose = require('mongoose');

const OcorrenciaSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    status: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Ocorrencia', OcorrenciaSchema);

// const SpotSchema = new mongoose.Schema({
//     thumbnail: String,
//     company: String,
//     price: Number,
//     techs: [String],
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// })

// module.exports = mongoose.model('Spot', SpotSchema);