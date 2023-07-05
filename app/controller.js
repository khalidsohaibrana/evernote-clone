const {createNote, fetchAllNotes, updateNote, deleteNote} = require('./model')
const {getTime} = require('./helper');

exports.createNewNote = async (req,res)=>{
    try {
        let currentTime = getTime();
        let newNote = {
            title: 'Untitled',
            desc:'',
            createdAt: currentTime,
            updatedAt:currentTime,
            
        }
        let id = await createNote(newNote);
        newNote['_id'] = id;
        res.status(201).send(newNote);


    } catch (exception) {
        res.status(400).send(exception.message)
    }
   
}

exports.getAllNotes = async(req, res) => {
    try {
        let query = {
            archive:0
        };
        if (req.params.type === 'trash') {
            query.archive = 1;
        }
        let data = await fetchAllNotes(query);
        res.status(200).send(data);

        
    } catch (error) {
        res.status(400).send(error.message)
    }
 };
 
 exports.updateNoteById = async (req, res) => {

    try {
        let currentTime = getTime();
        let query = {
            ...req.params,
            updatedAt: currentTime
        }

        await updateNote(req.params.id, query);
        return res.status(200).send(query);

    } catch (error) {
        res.status(400).send(error.message)
    }
 }

 exports.deleteNote = async (req, res) => {
    try {
        await deleteNote(req.params.id);
        return res.status(200).send(id,'Note Deleted');

    } catch (error) {
        res.status(400).send(error.message)
    } 
 }