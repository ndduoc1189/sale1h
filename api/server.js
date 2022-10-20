const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 7901

app.use(helmet());
app.use(morgan('common'));

app.get('/',(req, res,next ) => {
    res.send('this is a test');
})

app.listen(PORT,()=>{
     console.log('Start on port: '+PORT);
});