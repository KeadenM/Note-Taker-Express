const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use (express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', require('./routes/apiRoutes'));
app.use('/', require('./routes/htmlRoutes'));

app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
});