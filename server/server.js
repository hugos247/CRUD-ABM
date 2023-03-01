
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 8000;

// require the config file
require('./config/mongoose.config');

//Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//CORS

app.use(cors({
    origin:'http://localhost:3000'
}));


// Importar las rutas del servidor back-end
const Rutas = require('./routes/user.routes');
Rutas( app );



app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`);
});