let express = require('express');
let sequelize = require('./config/connection');
let routes = require('./routes');

let app = express();
let PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});