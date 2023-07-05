require ('dotenv').config();
// const {createNote, fetchAllNotes, updateNote, deleteNote} = require('./app/model')
// const {getTime} = require('./app/helper');
const express = require('express');
const app = express();
let bodyparser = require('body-parser');

const cors = require('cors');//recheck for datatype errors
const port = process.env.port;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

require(`${__dirname}/app/routes`, (app));

//app.get('/api/note', async(req, res) => {
  // Handle the GET request for "/api/note"

  // Send back the appropriate response
//   try {
    // let currentTime = getTime();
    // let newNote = {
    //     title: 'Untitled',
    //     desc:'',
    //     createdAt: currentTime,
    //     updatedAt:currentTime,
        
    // }
    // let id = await createNote(newNote);
    // newNote['_id'] = id;
    // res.status(201).send(newNote);


// } catch (exception) {
//     res.status(400).send(exception.message)
// }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});