const Booking = require('../models/Booking');

module.exports = {

    async Store(req, res) {
        const { user_id } = req.headers;
        const { ocorrencia_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            ocorrencia: ocorrencia_id,
            date,
        });

        await booking.populate('ocorrencia').populate('user').execPopulate();
        
        return res.json({ booking })
    }
};