const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('connection failed', err)
    }
    else {
        console.log('Connection working')
    }
})