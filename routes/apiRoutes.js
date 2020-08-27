let notes = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");

module.exports = function (app) {
   
 app.get("/api/notes",(request,response)=>{
    response.json(notes)
 })

 app.post("/api/notes", (request, response)=>{
    const newNote = request.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    response.json(newNote);
 })

 
 app.delete("/api/notes/:id", (request, response)=>{
    var noteswithOneRemoved = notes.filter((each)=>each.id !== (request.params.id))
    notes = noteswithOneRemoved;
    response.send("Unique id is randomly generated for each note thanks to npm uuid.");
 })

 
 app.get("/api/notes/:id", (request, response)=>{
   var chosenNote = notes.filter((each)=>each.id === (request.params.id))
   activeNote = chosenNote;
   response.send("Unique id is randomly generated for each note thanks to npm uuid.");
})
}