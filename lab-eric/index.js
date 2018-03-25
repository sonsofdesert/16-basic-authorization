// const express = require('express');
// const PORT = process.env.PORT || 3000;
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/lab-16-user');

// const app = express();

// const schema = new mongoose.Schema ({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         require: true,
//         unique: true
//     },
//     password: { //TODO: Hash!
//         type: String,
//         required: true
//     }
// })

// const User = mongoose.model('user', schema);

// const router = express.Router();
// router.get('/signin', (req, res) => {
//     res.send('hello')
// })

// router.post('/signup', express.json(), (res, req) => {
//     res.send(req.body);
// })

// app.use('/api', router);

// app.listen(PORT, () => console.log('http://localhost:' + PORT))