const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// mongoose.connect('mongodb+srv://oliveirajne:oliveirajne@omnistack-aikhk.mongodb.net/semana09?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

mongoose.connect('mongodb+srv://oliveirajne:oliveirajne@cluster-lg-5eibu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
